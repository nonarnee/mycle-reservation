import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import Navigator from '@/ui/Navigator';
import ChevronLeftIcon from '@/assets/icons/chevron_left.svg?react';
import ChevronRightIcon from '@/assets/icons/chevron_right.svg?react';
import Switch from '@/ui/Switch';

import { useReservationFilterStore } from '../../stores/reservationFilterStore';

import styles from './ReservationsHeader.module.css';

export default function ReservationsHeader() {
  const { hideCancelled, toggleCancelled, selectedDate, goToPreviousDay, goToNextDay } =
    useReservationFilterStore();

  const formattedDate = format(new Date(selectedDate), 'M월 d일 eeee', { locale: ko });

  return (
    <header className={styles.header}>
      <div className={styles.navigator}>
        <Navigator
          prev={
            <Navigator.Prev
              icon={<ChevronLeftIcon width={32} height={32} />}
              onClick={goToPreviousDay}
            />
          }
          next={
            <Navigator.Next
              icon={<ChevronRightIcon width={32} height={32} />}
              onClick={goToNextDay}
            />
          }
          contents={formattedDate}
        />
      </div>

      <div className={styles.filter}>
        <span>취소된 예약 안보기</span>
        <Switch checked={hideCancelled} onClick={toggleCancelled} />
      </div>
    </header>
  );
}
