export interface ModalProps {
  isOpen: boolean;
  onDimmerClick: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
  cta: React.ReactNode;
}

export interface ModalContainerProps {
  children: React.ReactNode;
}

export interface DimmerProps {
  onClick: () => void;
}

export interface ModalHeaderProps {
  text: string;
}

export interface ModalCTAProps {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}
