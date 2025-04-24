import {
  ModalProps,
  ModalContainerProps,
  DimmerProps,
  ModalHeaderProps,
  ModalCTAProps,
} from './Modal.type';
import {
  StyledDimmer,
  StyledModalContainer,
  StyledModalContent,
  StyledModalCTA,
  StyledModalHeader,
  StyledModalWrapper,
} from './Modal.style';

export default function Modal({ isOpen, onDimmerClick, header, children, cta }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ModalContainer>
        <Dimmer onClick={onDimmerClick} />
        <StyledModalWrapper>
          <StyledModalContent>
            {header}
            {children}
          </StyledModalContent>
          {cta}
        </StyledModalWrapper>
      </ModalContainer>
    </>
  );
}

function ModalContainer({ children }: ModalContainerProps) {
  return <StyledModalContainer>{children}</StyledModalContainer>;
}

function Dimmer({ onClick }: DimmerProps) {
  return <StyledDimmer onClick={onClick} />;
}

Modal.Header = function ModalHeader({ text }: ModalHeaderProps) {
  return <StyledModalHeader>{text}</StyledModalHeader>;
};

Modal.CTA = function ModalCTA({ primary, secondary }: ModalCTAProps) {
  return (
    <StyledModalCTA>
      {secondary}
      {primary}
    </StyledModalCTA>
  );
};
