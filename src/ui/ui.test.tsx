import { StrictMode, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { OverlayProvider, useOverlay } from '@toss/use-overlay';

import Button from './Button';
import Switch from './Switch';
import Modal from './Modal';

const buttonProps = { variant: 'primary', size: 'medium' } as const;

describe('Button', () => {
  it('preserves native attributes, explicit submit/reset, and prevents accidental submission', async () => {
    const user = userEvent.setup();
    const submit = vi.fn();
    render(
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <input aria-label="Value" defaultValue="original" />
        <Button {...buttonProps} title="default">
          Default
        </Button>
        <Button {...buttonProps} type="submit">
          Submit
        </Button>
        <Button {...buttonProps} type="reset">
          Reset
        </Button>
        <Button {...buttonProps} type="submit" disabled>
          Disabled
        </Button>
      </form>,
    );
    await user.click(screen.getByTitle('default'));
    await user.click(screen.getByText('Disabled'));
    expect(submit).not.toHaveBeenCalled();
    await user.click(screen.getByText('Submit'));
    expect(submit).toHaveBeenCalledTimes(1);
    await user.type(screen.getByLabelText('Value'), 'changed');
    await user.click(screen.getByText('Reset'));
    expect(screen.getByLabelText('Value')).toHaveValue('original');
  });
});

function Switches() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <>
      <Switch aria-label="First" checked={first} onClick={() => setFirst(!first)} />
      <Switch aria-label="Second" checked={second} onClick={() => setSecond(!second)} />
      <Switch id="custom-switch" aria-label="Custom" checked={false} onClick={() => {}} />
    </>
  );
}

it('connects each Switch label to its own stable input and supports Tab/Space', async () => {
  const user = userEvent.setup();
  render(<Switches />);
  const first = screen.getByRole('checkbox', { name: 'First' }) as HTMLInputElement;
  const second = screen.getByRole('checkbox', { name: 'Second' }) as HTMLInputElement;
  const firstId = first.id;
  expect(first.id).not.toBe(second.id);
  expect(screen.getByLabelText('Custom')).toHaveAttribute('id', 'custom-switch');
  await user.click(first.labels![0]);
  expect(first).toBeChecked();
  expect(second).not.toBeChecked();
  await user.click(second.labels![0]);
  expect(first).toBeChecked();
  expect(second).toBeChecked();
  expect(first.id).toBe(firstId);
  first.blur();
  await user.click(document.body);
  await user.tab();
  expect(first).toHaveFocus();
  await user.keyboard(' ');
  expect(first).not.toBeChecked();
  expect(second).toBeChecked();
});

function OverlayExample() {
  const overlay = useOverlay();
  return (
    <button
      onClick={() =>
        overlay.open(({ isOpen, close }) => (
          <Modal
            isOpen={isOpen}
            onClose={close}
            onDimmerClick={() => {}}
            header={<Modal.Header text="Reservation" />}
            cta={
              <Modal.CTA
                secondary={<button onClick={close}>Cancel</button>}
                primary={<button>Confirm</button>}
              />
            }
          >
            <button disabled>Unavailable</button>
            <button style={{ display: 'none' }}>Hidden</button>
          </Modal>
        ))
      }
    >
      Open
    </button>
  );
}

it('works with the real overlay lifecycle: name, initial focus, both Tab boundaries, Escape and restoration', async () => {
  const user = userEvent.setup();
  render(
    <StrictMode>
      <OverlayProvider>
        <OverlayExample />
      </OverlayProvider>
    </StrictMode>,
  );
  const opener = screen.getByText('Open');
  await user.click(opener);
  const dialog = await screen.findByRole('dialog', { name: 'Reservation' });
  expect(dialog).toHaveAttribute('aria-modal', 'true');
  expect(screen.getByText('Cancel')).toHaveFocus();
  expect(opener).toHaveAttribute('inert');
  expect(document.body.style.overflow).toBe('hidden');
  await user.tab({ shift: true });
  expect(screen.getByText('Confirm')).toHaveFocus();
  await user.tab();
  expect(screen.getByText('Cancel')).toHaveFocus();
  await user.tab();
  expect(screen.getByText('Confirm')).toHaveFocus();
  await user.keyboard('{Escape}');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(opener).toHaveFocus();
  expect(opener).not.toHaveAttribute('inert');
  expect(document.body.style.overflow).toBe('');
  await user.click(opener);
  expect(await screen.findByRole('dialog')).toBeInTheDocument();
  await user.click(screen.getByText('Cancel'));
  expect(opener).toHaveFocus();
});

it('keeps focus without controls and separates Escape from backdrop policy', async () => {
  const user = userEvent.setup();
  const backdrop = vi.fn();
  const close = vi.fn();
  const { rerender } = render(
    <Modal
      isOpen
      onDimmerClick={backdrop}
      onClose={close}
      aria-label="Notice"
      header={null}
      cta={null}
    >
      Text
    </Modal>,
  );
  const dialog = screen.getByRole('dialog', { name: 'Notice' });
  expect(dialog).toHaveFocus();
  await user.tab();
  expect(dialog).toHaveFocus();
  await user.tab({ shift: true });
  expect(dialog).toHaveFocus();
  await user.click(dialog);
  expect(backdrop).not.toHaveBeenCalled();
  await user.keyboard('{Escape}');
  expect(close).toHaveBeenCalledTimes(1);
  expect(backdrop).not.toHaveBeenCalled();
  await user.click(dialog.previousElementSibling!);
  expect(backdrop).toHaveBeenCalledTimes(1);
  rerender(
    <Modal isOpen onDimmerClick={backdrop} aria-label="Notice" header={null} cta={null}>
      Text
    </Modal>,
  );
  dialog.focus();
  await user.keyboard('{Escape}');
  expect(backdrop).toHaveBeenCalledTimes(1);
});

it('restores prior background/scroll state on unmount even when the opener was removed', () => {
  const opener = document.createElement('button');
  const background = document.createElement('div');
  background.setAttribute('inert', 'existing');
  document.body.append(opener, background);
  opener.focus();
  document.body.style.setProperty('overflow', 'scroll', 'important');
  const { unmount } = render(
    <Modal isOpen onDimmerClick={() => {}} aria-label="Notice" header={null} cta={null}>
      Text
    </Modal>,
  );
  opener.remove();
  expect(() => unmount()).not.toThrow();
  expect(background).toHaveAttribute('inert', 'existing');
  expect(document.body.style.overflow).toBe('scroll');
  expect(document.body.style.getPropertyPriority('overflow')).toBe('important');
  background.remove();
  document.body.style.removeProperty('overflow');
});

it('handles a single control and restores state when isOpen changes without unmounting', async () => {
  const user = userEvent.setup();
  const opener = document.createElement('button');
  document.body.append(opener);
  opener.focus();
  const props = {
    onDimmerClick: () => {},
    header: <Modal.Header text="Single action" />,
    cta: <button>Done</button>,
    children: 'Content',
  };
  const { rerender } = render(<Modal {...props} isOpen={false} />);
  expect(opener).toHaveFocus();
  expect(document.body.style.overflow).toBe('');
  rerender(<Modal {...props} isOpen />);
  const done = screen.getByText('Done');
  expect(done).toHaveFocus();
  await user.tab();
  expect(done).toHaveFocus();
  await user.tab({ shift: true });
  expect(done).toHaveFocus();
  rerender(<Modal {...props} isOpen={false} />);
  expect(opener).toHaveFocus();
  expect(opener).not.toHaveAttribute('inert');
  expect(document.body.style.overflow).toBe('');
  opener.remove();
});

it('accepts an explicit title reference for a custom header', () => {
  render(
    <Modal
      isOpen
      onDimmerClick={() => {}}
      aria-labelledby="custom-title"
      header={<h2 id="custom-title">Custom title</h2>}
      cta={null}
    >
      Content
    </Modal>,
  );
  expect(screen.getByRole('dialog', { name: 'Custom title' })).toBeInTheDocument();
});
