import useInfiniteReservations from '../hooks/queries/useInfiniteReservations';

import ReservationList from './ReservationList';
import styles from './ReservationsContent.module.css';

export default function ReservationsContent() {
  const {
    data: reservations,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteReservations({
    date: '2024-07-14',
    page: 1,
    per_page: 20,
  });

  console.log(reservations);

  return (
    <main className={styles.content}>
      <ReservationList dailyReservations={[]} />
      {isFetchingNextPage && <div>Loading...</div>}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage && isFetchingNextPage}>
        다음페이지
      </button>
    </main>
  );
}
