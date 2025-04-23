import { css } from '@emotion/react';
import { useParams } from 'react-router';

import Border from '@/ui/Border';
import Spacing from '@/ui/Spacing';

import useReservation from '../hooks/queries/useReservation';

import ProductSection from './ProductSection';
import PaymentSection from './PaymentSection';
import InfoSection from './InfoSection';

export default function ReservationContent() {
  const { id } = useParams<{ id: string }>();
  const { data: reservation } = useReservation({ id: id ?? '' });

  return (
    <main
      css={css`
        overflow-y: auto;
      `}
    >
      {reservation && (
        <>
          <ProductSection reservation={reservation} />
          <Border size={8} />
          <InfoSection reservation={reservation} />
          <Border size={8} />
          <PaymentSection reservation={reservation} />
        </>
      )}

      {/* 하단 여백 */}
      <Spacing size={64} />
    </main>
  );
}
