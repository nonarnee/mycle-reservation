import ReservationList from './ReservationList';
import styles from './ReservationsContent.module.css';

export default function ReservationsContent() {
  return (
    <main className={styles.content}>
      <ReservationList dailyReservations={[]} />
    </main>
  );
}
