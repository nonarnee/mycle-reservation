import ClockIcon from '@/assets/icons/clock_fill.svg?react';

import PageHeader from '../../PageHeader';

import styles from './ReservationHeader.module.css';

export default function ReservationHeader() {
  return (
    <PageHeader title="예약 요청 확인">
      <div className={styles.time}>
        <ClockIcon width={20} height={20} />
        <span>2024년 7월 23일 (화) 오전 9:00</span>
      </div>
    </PageHeader>
  );
}
