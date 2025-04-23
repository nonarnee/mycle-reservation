import { Reservation } from '@/types/reservation';

import ReservationCard from './ReservationCard';
import styles from './ReservationGroup.module.css';

interface Props {
  time: string;
  reservations: Reservation[];
}

export default function ReservationGroup({ time, reservations }: Props) {
  return (
    <>
      <div className={styles.time}>
        {time} {reservations.length}건
      </div>
      <ul className={styles.group}>
        {reservations.map((reservation) => (
          <ReservationCard key={reservation.serverId} reservation={reservation} />
        ))}
      </ul>
    </>
  );
}
