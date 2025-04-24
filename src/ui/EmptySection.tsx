import { css } from '@emotion/react';

import IconNoData from '@/assets/icons/no_data.svg?react';
import { theme } from '@/styles/theme';

import Spacing from './Spacing';

export default function EmptySection({ message }: { message: string }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <Spacing size={32} />
      <IconNoData width={120} height={120} />
      <Spacing size={24} />
      <p
        css={css`
          font-size: 16px;
          font-weight: 600;
          color: ${theme.colors.grayDark};
        `}
      >
        {message}
      </p>
    </div>
  );
}
