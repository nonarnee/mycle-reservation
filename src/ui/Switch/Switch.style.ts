import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

const getCheckedColor = (checked: boolean) => {
  if (checked) {
    return css`
      background-color: ${theme.colors.primary};
    `;
  }
  return css`
    background-color: ${theme.colors.grayLight2};
  `;
};

const getCheckedTransform = (checked: boolean) => {
  if (checked) {
    return css`
      transform: translate3d(20px, 0, 0);
    `;
  }

  return css`
    transform: none;
  `;
};

export const SwitchWrapper = styled.div`
  margin-left: 16px;
  position: relative;
  display: inline-block;
`;

export const SwitchInput = styled.input`
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  margin: -1px;
  width: 1px;
  height: 1px;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  appearance: none;
`;

export const SwitchLabel = styled.label<{ checked: boolean }>`
  transform: none;
  display: flex;
  position: relative;
  width: 48px;
  height: 28px;
  border-radius: 15px;
  cursor: pointer;
  margin: 0;

  ${({ checked }) => getCheckedColor(checked)};
`;

export const SwitchBall = styled.div<{ checked: boolean }>`
  transform: translateX(16px) translateZ(0);
  align-self: center;
  z-index: 1;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 2px;
  border-radius: 100%;
  background-color: ${theme.colors.white};

  ${({ checked }) => getCheckedTransform(checked)};
`;
