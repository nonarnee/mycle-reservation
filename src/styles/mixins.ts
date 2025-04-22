import { css } from '@emotion/react';

export const singleLineEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const multiLineEllipsis = (line: number) => css`
  text-overflow: ellipsis;
  display: -webkit-box;
  white-space: pre-wrap;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
