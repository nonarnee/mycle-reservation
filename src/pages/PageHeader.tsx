import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router';

import ArrowLeftIcon from '@/assets/icons/arrow_left.svg?react';

interface Props {
  title: string;
}

export default function PageHeader({ title, children }: PropsWithChildren<Props>) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <header
      css={css`
        flex-shrink: 0;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: 4px;
        `}
      >
        <button
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
          `}
        >
          <ArrowLeftIcon width={24} height={24} onClick={handleClick} />
        </button>
        <span
          css={css`
            font-weight: 500;
            font-size: 16px;
          `}
        >
          {title}
        </span>
      </div>
      {children}
    </header>
  );
}
