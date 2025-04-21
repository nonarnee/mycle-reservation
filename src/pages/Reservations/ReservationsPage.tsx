import { css } from '@emotion/react';

import Button from '@/ui/Button';

export default function ReservationsPage() {
  return (
    <>
      <div>header</div>
      <div
        css={css`
          flex: 1;
          padding: 16px;
        `}
      >
        <div
          css={css`
            display: flex;
            margin: 20px;
          `}
        >
          <Button variant="primary" size="medium">
            asd
          </Button>
          <Button variant="danger" size="medium">
            asd
          </Button>
          <Button variant="dark" size="medium">
            asd
          </Button>
        </div>
      </div>
      <div>footer</div>
    </>
  );
}
