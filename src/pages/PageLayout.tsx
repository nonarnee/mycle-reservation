import { css } from '@emotion/react';
import { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      {children}
    </div>
  );
}
