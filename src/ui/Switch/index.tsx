import { useId } from 'react';

import { SwitchProps } from './Switch.type';
import { SwitchWrapper, SwitchInput, SwitchLabel, SwitchBall } from './Switch.style';

export default function Switch({ checked, onClick, id, ...rest }: SwitchProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <SwitchWrapper>
      <SwitchInput {...rest} id={inputId} type="checkbox" checked={checked} onChange={onClick} />
      <SwitchLabel htmlFor={inputId} checked={checked}>
        <SwitchBall checked={checked} />
      </SwitchLabel>
    </SwitchWrapper>
  );
}
