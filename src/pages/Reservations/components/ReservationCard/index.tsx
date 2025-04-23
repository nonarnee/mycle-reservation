import { useNavigate } from 'react-router';
import { css } from '@emotion/react';

import PlusCircleIcon from '@/assets/icons/plus_circle.svg?react';
import Badge from '@/ui/Badge';
import Border from '@/ui/Border';
import Spacing from '@/ui/Spacing';
import { multiLineEllipsis, singleLineEllipsis } from '@/styles/mixins';
import { Reservation, ReservationStatus } from '@/types/reservation';

import useCustomer from '../../hooks/queries/useCustomer';

import styles from './ReservationCard.module.css';

interface Props {
  reservation: Reservation;
}

export default function ReservationCard({ reservation }: Props) {
  const navigate = useNavigate();
  const { data: customer } = useCustomer({ customerId: reservation.customerId });

  const mainProduct = reservation.products[0];
  const subProducts = reservation.products.slice(1);
  const visitLabel = customer?.visitCount ? `${customer.visitCount}회 방문` : '신규 고객';
  const isCanceled =
    reservation.status === ReservationStatus.CANCELLED ||
    reservation.status === ReservationStatus.DEFERRED;

  const handleClick = () => {
    if (!isCanceled) {
      navigate(`/reservations/${reservation.serverId}`);
    }
  };

  return (
    <li className={styles.card} onClick={handleClick}>
      {isCanceled && (
        <>
          <Badge variant="danger" size="large">
            취소된 예약
          </Badge>
          <Spacing size={18} />
        </>
      )}

      <div>
        <p className={styles.title} css={multiLineEllipsis(2)}>
          {mainProduct.name}
        </p>

        {subProducts.length > 0 && (
          <>
            <Spacing size={8} />
            {subProducts.map((product) => (
              <div className={styles.option} key={product.name}>
                <PlusCircleIcon
                  width={16}
                  height={16}
                  css={css`
                    flex-shrink: 0;
                  `}
                />
                <span css={singleLineEllipsis}>{product.name}</span>
              </div>
            ))}
          </>
        )}
      </div>

      <Spacing size={18} />
      <Border />
      <Spacing size={18} />

      <div className={styles.info}>
        <span className={styles.car} css={singleLineEllipsis}>
          {customer?.vehicle.number} {customer?.vehicle.model}
        </span>
        <Badge>{visitLabel}</Badge>
      </div>

      <Spacing size={8} />

      <div className={styles.customer}>
        <div className={styles.customerInfo}>
          <span>{customer?.name}</span>
          <span>{customer?.phone}</span>
        </div>

        {reservation.requirements && (
          <>
            <Spacing size={4} />
            <div className={styles.request} css={multiLineEllipsis(3)}>
              {reservation.requirements}
            </div>
          </>
        )}
      </div>
    </li>
  );
}
