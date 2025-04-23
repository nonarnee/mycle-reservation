import Border from '@/ui/Border';
import Dot from '@/ui/Dot';
import Spacing from '@/ui/Spacing';
import { ReservationDetail } from '@/types/reservation';
import { FuelTypeLabel } from '@/types/vehicle';

import styles from './InfoSection.module.css';

interface Props {
  reservation: ReservationDetail;
}

export default function InfoSection({ reservation }: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>고객 정보</p>
      <Spacing size={12} />
      <div className={styles.sub}>
        <p className={styles.subTitle}>고객 이름</p>
        <p className={styles.subContent}>{reservation.customer.name}</p>
      </div>
      <div className={styles.sub}>
        <p className={styles.subTitle}>전화번호</p>
        <p className={styles.subContent}>{reservation.customer.phone}</p>
      </div>

      <Spacing size={12} />
      <Border />
      <Spacing size={12} />

      <p className={styles.title}>차량 정보</p>
      <Spacing size={12} />
      <div className={styles.sub}>
        <p className={styles.subTitle}>차량 정보</p>
        <p className={styles.subContent}>
          {reservation.vehicle.brand} <Dot /> {reservation.vehicle.model} <Dot />{' '}
          {FuelTypeLabel[reservation.vehicle.fuelType]}
        </p>
      </div>
      <div className={styles.sub}>
        <p className={styles.subTitle}>차량 번호</p>
        <p className={styles.subContent}>{reservation.vehicle.number}</p>
      </div>
    </div>
  );
}
