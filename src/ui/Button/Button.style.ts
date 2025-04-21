import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

import { ButtonProps, ButtonVariant } from './Button.type';

const getTypeStyle = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      `;
    case 'danger':
      return css`
        background: ${theme.colors.dangerLight};
        color: ${theme.colors.danger};
      `;
    case 'dark':
      return css`
        background: ${theme.colors.background};
        color: ${theme.colors.dark};
      `;
  }
};

const getSizeStyle = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return css`
        min-width: 40px;
        height: 32px;
        font-size: 12px;
        font-weight: 400;
      `;
    case 'medium':
      return css`
        min-width: 64px;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
      `;
    case 'large':
      return css`
        min-width: 96px;
        height: 56px;
        font-size: 20px;
        font-weight: 600;
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 10px;
  cursor: pointer;

  ${({ variant }) => getTypeStyle(variant)}
  ${({ size }) => getSizeStyle(size)}
`;
