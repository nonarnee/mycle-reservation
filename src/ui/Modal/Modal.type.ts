export interface ModalProps {
  isOpen: boolean;
  onDimmerClick: () => void;
  /** Escape dismissal is independent of backdrop clicks. */
  onClose?: () => void;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  header: React.ReactNode;
  children: React.ReactNode;
  cta: React.ReactNode;
}

export interface ModalHeaderProps {
  text: string;
}

export interface ModalCTAProps {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}

// Retained for consumers of the original exported types.
export interface ModalContainerProps {
  children: React.ReactNode;
}

export interface DimmerProps {
  onClick: () => void;
}
