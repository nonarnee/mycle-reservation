import { SwitchProps } from './Switch.type';
import { SwitchWrapper, SwitchInput, SwitchLabel, SwitchBall } from './Switch.style';

export default function Switch({ checked, onClick }: SwitchProps) {
  return (
    <SwitchWrapper>
      <SwitchInput id="switch" type="checkbox" checked={checked} onChange={onClick} />
      <SwitchLabel htmlFor="switch" checked={checked}>
        <SwitchBall checked={checked} />
      </SwitchLabel>
    </SwitchWrapper>
  );
}
