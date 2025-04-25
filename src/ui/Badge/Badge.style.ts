import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

import { BadgeProps } from './Badge.type';

const getSizeStyle = (size: BadgeProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        height: 24px;
        padding: 0 8px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 12px;
      `;
    case 'large':
      return css`
        height: 36px;
        padding: 0 16px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 6px;
      `;
  }
};

const getVariantStyle = (variant: BadgeProps['variant']) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primaryLight};
        color: ${theme.colors.primary};
      `;
    case 'danger':
      return css`
        background-color: ${theme.colors.dangerLight};
        color: ${theme.colors.danger};
      `;
  }
};

export const BadgeWrapper = styled.span<Omit<BadgeProps, 'children'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ size }) => getSizeStyle(size)}
  ${({ variant }) => getVariantStyle(variant)}
`;
