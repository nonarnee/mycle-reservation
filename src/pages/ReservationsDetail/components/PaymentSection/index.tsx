import { cx } from '@emotion/css';

import { formatPrice } from '@/utils/formatPrice';
import Spacing from '@/ui/Spacing';
import { ReservationDetail } from '@/types/reservation';
import { PaymentMethodLabel } from '@/types/payment';
import { getTotalPrice } from '@/utils/getTotalPrice';

import styles from './PaymentSection.module.css';

interface Props {
  reservation: ReservationDetail;
}

export default function PaymentSection({ reservation }: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>결제상세</p>
      <Spacing size={12} />

      <div className={styles.sub}>
        <p className={styles.subTitle}>결제방법</p>
        <p className={styles.subContent}>{PaymentMethodLabel[reservation.paymentMethod]}</p>
      </div>

      <Spacing size={6} />

      <div className={styles.sub}>
        <p className={cx(styles.subTitle, styles.price)}>총 결제금액</p>
        <p className={cx(styles.subContent, styles.price, styles.amount)}>
          {formatPrice(getTotalPrice(reservation.products))}
        </p>
      </div>
    </div>
  );
}
