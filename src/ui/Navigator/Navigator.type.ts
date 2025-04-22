export interface NavigatorProps {
  contents: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
}

export interface NavigatorItemProps {
  icon: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
