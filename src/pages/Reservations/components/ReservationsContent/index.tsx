import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

import ReservationList from '../ReservationList';
import EmptySection from '../EmptySection';
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
      {isEmpty && <EmptySection />}
      <ReservationList reservations={reservations} />
      <div ref={scrollRef} />
    </main>
  );
}
