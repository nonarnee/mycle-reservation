import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import EmptySection from '@/ui/EmptySection';

import ReservationList from '../ReservationList';
import useFilteredReservations from '../../hooks/useFilteredReservations';

import styles from './ReservationsContent.module.css';

export default function ReservationsContent() {
  const { reservations, isEmpty, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFilteredReservations();

  const scrollRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  return (
    <main className={styles.content}>
      {isEmpty && <EmptySection message="예약 요청이 없습니다." />}
      <ReservationList reservations={reservations} />
      <div ref={scrollRef} />
    </main>
  );
}
