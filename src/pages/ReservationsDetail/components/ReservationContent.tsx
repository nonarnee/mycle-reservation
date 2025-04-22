import { css } from '@emotion/react';

import Border from '@/ui/Border';
import Spacing from '@/ui/Spacing';

import ProductSection from './ProductSection';
import PaymentSection from './PaymentSection';
import InfoSection from './InfoSection';

export default function ReservationContent() {
  return (
    <main
      css={css`
        overflow-y: auto;
      `}
    >
      <ProductSection />
      <Border size={8} />
      <InfoSection />
      <Border size={8} />
      <PaymentSection />

      {/* CTA 크기 */}
      <Spacing size={72} />

      {/* 하단 여백 */}
      <Spacing size={64} />
    </main>
  );
}
