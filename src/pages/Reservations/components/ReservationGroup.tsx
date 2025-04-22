import ReservationCard from './ReservationCard';
import styles from './ReservationGroup.module.css';

interface Props {
  time: string;
}

export default function ReservationGroup({ time }: Props) {
  return (
    <>
      <div className={styles.time}>{time} 4건</div>
      <div className={styles.group}>
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
      </div>
    </>
  );
}
