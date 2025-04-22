import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

interface Props {
  color?: string;
}

export default function Dot({ color = theme.colors['gray-light3'] }: Props) {
  return (
    <span
      css={css`
        color: ${color};
      `}
    >
      •
    </span>
  );
}
