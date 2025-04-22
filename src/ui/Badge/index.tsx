import { BadgeWrapper } from './Badge.style';
import { BadgeProps } from './Badge.type';

export default function Badge({ children, variant = 'primary', size = 'small' }: BadgeProps) {
  return (
    <BadgeWrapper variant={variant} size={size}>
      {children}
    </BadgeWrapper>
  );
}
