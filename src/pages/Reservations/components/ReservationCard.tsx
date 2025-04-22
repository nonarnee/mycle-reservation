import PlusCircleIcon from '@/assets/icons/plus_circle.svg?react';
import Badge from '@/ui/Badge';
import Border from '@/ui/Border';
import Spacing from '@/ui/Spacing';

import styles from './ReservationCard.module.css';

export default function ReservationCard() {
  return (
    <div className={styles.card}>
      {true && (
        <>
          <Badge variant="danger" size="large">
            취소된 예약
          </Badge>
          <Spacing size={18} />
        </>
      )}

      <div>
        <p className={styles.title}>asd</p>
        {true && (
          <>
            <Spacing size={8} />
            <div className={styles.options}>
              <div className={styles.option}>
                <PlusCircleIcon width={16} height={16} />
                <span>연료필터 카트리지</span>
              </div>
              <div className={styles.option}>
                <PlusCircleIcon width={16} height={16} />
                <span>연료필터 카트리지</span>
              </div>
            </div>
          </>
        )}
      </div>

      <Spacing size={16} />
      <Border />
      <Spacing size={16} />

      <div className={styles.info}>
        <span className={styles.car}>차이름</span>
        <Badge>3회 방문</Badge>
      </div>
      <Spacing size={8} />
      <div className={styles.customer}>
        <div className={styles.customerInfo}>
          <span>이름</span>
          <span>010-1111-2222</span>
        </div>
        <Spacing size={4} />
        {true && <div className={styles.request}>요청사항</div>}
      </div>
    </div>
  );
}
