import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const NavigatorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigatorContents = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors['gray-dark']};
`;

export const NavigatorSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
`;

export const NavigatorItem = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
