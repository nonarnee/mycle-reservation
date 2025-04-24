import { css } from '@emotion/react';

import PlusCircleIcon from '@/assets/icons/plus_circle.svg?react';
import Spacing from '@/ui/Spacing';
import { ReservationDetail } from '@/types/reservation';

import styles from './ProductSection.module.css';

interface Props {
  reservation: ReservationDetail;
}

export default function ProductSection({ reservation }: Props) {
  const mainProduct = reservation.products[0];
  const subProducts = reservation.products.slice(1);

  return (
    <div className={styles.wrapper}>
      <p className={styles.groupName}>{mainProduct.group}</p>
      <Spacing size={4} />
      <p className={styles.productName}>{mainProduct.name}</p>

      {subProducts.length > 0 && (
        <>
          <Spacing size={12} />
          <ul className={styles.options}>
            {subProducts.map((product) => (
              <li className={styles.option} key={product.name}>
                <PlusCircleIcon
                  width={16}
                  height={16}
                  css={css`
                    flex-shrink: 0;
                  `}
                />
                <span>{product.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {reservation.requirements && (
        <>
          <Spacing size={16} />
          <div className={styles.request}>
            <p className={styles.requestTitle}>요청사항</p>
            <p className={styles.requestContent}>{reservation.requirements}</p>
          </div>
        </>
      )}
    </div>
  );
}
