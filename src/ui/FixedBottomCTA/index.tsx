import { FixedBottomCTAProps } from './FixedBottomCTA.type';
import { FixedBottomCTAWrapper, FixedBottomCTAButtons } from './FixedBottomCTA.style';

export default function FixedBottomCTA({ primary, secondary, border }: FixedBottomCTAProps) {
  return (
    <FixedBottomCTAWrapper border={border}>
      <FixedBottomCTAButtons>
        {secondary}
        {primary}
      </FixedBottomCTAButtons>
    </FixedBottomCTAWrapper>
  );
}
