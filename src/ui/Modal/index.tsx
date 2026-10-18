import { useId, useLayoutEffect, useRef } from 'react';

import { ModalProps, ModalHeaderProps, ModalCTAProps } from './Modal.type';
import {
  StyledDimmer,
  StyledModalContainer,
  StyledModalContent,
  StyledModalCTA,
  StyledModalHeader,
  StyledModalWrapper,
} from './Modal.style';

function getFocusableElements(dialog: HTMLElement) {
  return Array.from(
    dialog.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex], [contenteditable="true"]',
    ),
  ).filter((element) => {
    if (element.tabIndex < 0 || element.matches(':disabled') || element.closest('[inert]')) {
      return false;
    }
    for (let current: HTMLElement | null = element; current; current = current.parentElement) {
      const style = getComputedStyle(current);
      if (current.hidden || style.display === 'none' || style.visibility === 'hidden') return false;
    }
    return true;
  });
}

export default function Modal({
  isOpen,
  onDimmerClick,
  onClose,
  header,
  children,
  cta,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: ModalProps) {
  const titleId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isOpen || !containerRef.current || !dialogRef.current) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    const bodyOverflow = document.body.style.getPropertyValue('overflow');
    const overflowPriority = document.body.style.getPropertyPriority('overflow');
    const background: { element: HTMLElement; inert: string | null }[] = [];

    // OverlayProvider renders overlays beside its children, without a portal.
    // Disable siblings at each ancestor level, never the ancestor containing this dialog.
    let branch: HTMLElement = containerRef.current;
    while (branch.parentElement) {
      for (const sibling of Array.from(branch.parentElement.children)) {
        if (sibling !== branch && sibling instanceof HTMLElement) {
          background.push({ element: sibling, inert: sibling.getAttribute('inert') });
          sibling.setAttribute('inert', '');
        }
      }
      if (branch.parentElement === document.body) break;
      branch = branch.parentElement;
    }
    document.body.style.setProperty('overflow', 'hidden');
    (getFocusableElements(dialog)[0] ?? dialog).focus();

    return () => {
      for (const { element, inert } of background) {
        if (inert === null) element.removeAttribute('inert');
        else element.setAttribute('inert', inert);
      }
      if (bodyOverflow) document.body.style.setProperty('overflow', bodyOverflow, overflowPriority);
      else document.body.style.removeProperty('overflow');
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <StyledModalContainer ref={containerRef}>
      <StyledDimmer onClick={onDimmerClick} aria-hidden="true" />
      <StyledModalWrapper
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy ?? (ariaLabel ? undefined : titleId)}
        tabIndex={-1}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && !event.nativeEvent.isComposing && onClose) {
            event.preventDefault();
            event.stopPropagation();
            onClose();
          }
          if (event.key !== 'Tab') return;
          const elements = getFocusableElements(event.currentTarget);
          const first = elements[0];
          const last = elements[elements.length - 1];
          if (!first) {
            event.preventDefault();
            event.currentTarget.focus();
          } else if (
            event.shiftKey &&
            (document.activeElement === first || document.activeElement === event.currentTarget)
          ) {
            event.preventDefault();
            last.focus();
          } else if (
            !event.shiftKey &&
            (document.activeElement === last || document.activeElement === event.currentTarget)
          ) {
            event.preventDefault();
            first.focus();
          }
        }}
      >
        <StyledModalContent>
          {header != null && <div id={titleId}>{header}</div>}
          {children}
        </StyledModalContent>
        {cta}
      </StyledModalWrapper>
    </StyledModalContainer>
  );
}

Modal.Header = function ModalHeader({ text }: ModalHeaderProps) {
  return <StyledModalHeader>{text}</StyledModalHeader>;
};

Modal.CTA = function ModalCTA({ primary, secondary }: ModalCTAProps) {
  return (
    <StyledModalCTA>
      {secondary}
      {primary}
    </StyledModalCTA>
  );
};
