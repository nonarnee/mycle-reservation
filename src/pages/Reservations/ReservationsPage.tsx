import { css } from '@emotion/react';
import { useState } from 'react';

import Button from '@/ui/Button';
import Navigator from '@/ui/Navigator';
import Switch from '@/ui/Switch';
import ChevronLeftIcon from '@/assets/icons/chevron_left.svg?react';
import ChevronRightIcon from '@/assets/icons/chevron_right.svg?react';
import FixedBottomCTA from '@/ui/FixedBottomCTA';

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
          <Navigator
            prev={
              <Navigator.Prev
                icon={<ChevronLeftIcon width={24} height={24} />}
                onClick={() => console.log('prev')}
              />
            }
            next={
              <Navigator.Next
                icon={<ChevronRightIcon width={24} height={24} />}
                onClick={() => console.log('next')}
                disabled
              />
            }
            contents={<>title</>}
          />
        </div>
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
      <FixedBottomCTA
        primary={
          <Button variant="primary" size="medium" fullWidth>
            ok
          </Button>
        }
        secondary={
          <Button variant="dark" size="medium" fullWidth>
            cancel
          </Button>
        }
      />
    </>
  );
}
