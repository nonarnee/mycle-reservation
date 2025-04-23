import { useParams } from 'react-router';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import ClockIcon from '@/assets/icons/clock_fill.svg?react';

import PageHeader from '../../PageHeader';
import useReservation from '../hooks/queries/useReservation';

import styles from './ReservationHeader.module.css';

export default function ReservationHeader() {
  const { id } = useParams<{ id: string }>();
  const { data: reservation } = useReservation({ id: id ?? '' });

  const dateFormat = reservation?.reservedAt
    ? format(reservation?.reservedAt, 'yyyy년 M월 d일 (E) a h:mm', { locale: ko })
    : '';

  return (
    <PageHeader title="예약 요청 확인">
      <div className={styles.time}>
        <ClockIcon width={20} height={20} />
        <span>{dateFormat}</span>
      </div>
    </PageHeader>
  );
}
