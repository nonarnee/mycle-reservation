import { StyledButton } from './Button.style';
import { ButtonProps } from './Button.type';

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'medium',
    type = 'button',
    onClick,
    disabled,
    children,
    ...rest
  } = props;

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span>{children}</span>
    </StyledButton>
  );
}
