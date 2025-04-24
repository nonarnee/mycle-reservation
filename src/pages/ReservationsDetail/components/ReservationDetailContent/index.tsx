import { useParams } from 'react-router';

import Border from '@/ui/Border';
import Spacing from '@/ui/Spacing';

import ProductSection from '../ProductSection';
import PaymentSection from '../PaymentSection';
import InfoSection from '../InfoSection';
import useReservation from '../../hooks/queries/useReservation';

import styles from './ReservationDetailContent.module.css';

export default function ReservationDetailContent() {
  const { id } = useParams<{ id: string }>();
  const { data: reservation } = useReservation({ id: id ?? '' });

  return (
    <main className={styles.content}>
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
