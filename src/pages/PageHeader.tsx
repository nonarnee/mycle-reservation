import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

import ArrowLeftIcon from '@/assets/icons/arrow_left.svg?react';

interface Props {
  title: string;
}

export default function PageHeader({ title, children }: PropsWithChildren<Props>) {
  return (
    <header>
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: 16px;
        `}
      >
        <ArrowLeftIcon width={24} height={24} />
        <span
          css={css`
            padding-left: 16px;
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
