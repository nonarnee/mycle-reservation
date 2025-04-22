import { css } from '@emotion/react';
import { useState } from 'react';

import Button from '@/ui/Button';
import Switch from '@/ui/Switch';

export default function ReservationsPage() {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <div>header</div>
      <div
        css={css`
          flex: 1;
          padding: 16px;
        `}
      >
        <div>
          <Switch checked={checked} onClick={toggleChecked} />
        </div>
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
