import { useMemo } from 'react';

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { ReservationStatus } from '@/types/reservation';

import useInfiniteReservations from '../../hooks/queries/useInfiniteReservations';
import { useReservationFilterStore } from '../../stores/reservationFilterStore';
import ReservationList from '../ReservationList';
import EmptySection from '../EmptySection';

import styles from './ReservationsContent.module.css';
export default function ReservationsContent() {
  const { hideCancelled, selectedDate } = useReservationFilterStore();

  const {
    data: reservationData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteReservations({
    date: selectedDate,
    page: 1,
    per_page: 20,
  });

  console.log(reservationData);

  const filteredReservations = useMemo(() => {
    if (!reservationData?.reservations) return [];

    if (hideCancelled) {
      return reservationData.reservations.filter(
        (reservation) =>
          reservation.status !== ReservationStatus.CANCELLED &&
          reservation.status !== ReservationStatus.DEFERRED,
      );
    }

    return reservationData.reservations;
  }, [reservationData, hideCancelled]);

  const scrollRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  return (
    <main className={styles.content}>
      {filteredReservations.length === 0 && <EmptySection />}
      <ReservationList reservations={filteredReservations} />
      <div ref={scrollRef} />
    </main>
  );
}
