import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const StyledModalWrapper = styled.div`
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 40px);
  z-index: 2;
  background-color: ${theme.colors.white};
  border-radius: 16px;
  overflow: hidden;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 20px 8px;
`;

export const StyledModalContainer = styled.div`
  position: fixed;
  width: 100%:
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: conter;
  inset: 0;
  z-index: 1;
`;

export const StyledDimmer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledModalHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const StyledModalCTA = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 16px;
`;
