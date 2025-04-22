import Navigator from '@/ui/Navigator';
import ChevronLeftIcon from '@/assets/icons/chevron_left.svg?react';
import ChevronRightIcon from '@/assets/icons/chevron_right.svg?react';
import Switch from '@/ui/Switch';

import styles from './ReservationsHeader.module.css';

export default function ReservationsHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.navigator}>
        <Navigator
          prev={<Navigator.Prev icon={<ChevronLeftIcon width={32} height={32} />} />}
          next={<Navigator.Next icon={<ChevronRightIcon width={32} height={32} />} />}
          contents="12월 3일 월요일"
        />
      </div>

      <div className={styles.filter}>
        <span>취소된 예약 안보기</span>
        <Switch checked={true} onClick={() => {}} />
      </div>
    </header>
  );
}
