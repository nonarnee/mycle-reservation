export type ButtonVariant = 'primary' | 'danger' | 'dark';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}
