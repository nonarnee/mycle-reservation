import { FixedBottomCTAProps } from './FixedBottomCTA.type';
import { FixedBottomCTAWrapper, FixedBottomCTAButtons } from './FixedBottomCTA.style';

export default function FixedBottomCTA({ primary, secondary }: FixedBottomCTAProps) {
  return (
    <FixedBottomCTAWrapper>
      <FixedBottomCTAButtons>
        {secondary}
        {primary}
      </FixedBottomCTAButtons>
    </FixedBottomCTAWrapper>
  );
}
