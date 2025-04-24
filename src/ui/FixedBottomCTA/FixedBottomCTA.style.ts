import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

const getBorder = (border: boolean) => {
  if (border) {
    return css`
      border-top: 1px solid ${theme.colors.background};
    `;
  }
  return '';
};

export const FixedBottomCTAWrapper = styled.div<{ border?: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 12px 16px;
  z-index: 1;
  background-color: ${theme.colors.white};

  ${({ border }) => getBorder(Boolean(border))}
`;

export const FixedBottomCTAButtons = styled.div`
  display: flex;
  gap: 8px;
`;
