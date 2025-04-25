import { Reservation, ReservationStatus } from '@/types/reservation';

/**
 * 취소된 예약인지 확인
 */
export const isCanceledReservation = (status: ReservationStatus): boolean =>
  status === ReservationStatus.CANCELLED || status === ReservationStatus.DEFERRED;

/**
 * 예약을 상태 및 시간별로 정렬
 */
export const sortReservations = (reservations: Reservation[]): Reservation[] => {
  return [...reservations].sort((a, b) => {
    const isACanceled = isCanceledReservation(a.status);
    const isBCanceled = isCanceledReservation(b.status);

    // 예약 시간 정렬
    const timeDiff = new Date(a.reservedAt).getTime() - new Date(b.reservedAt).getTime();

    // 둘 다 정상 예약이면 시간순 정렬
    if (!isACanceled && !isBCanceled) return timeDiff;

    // 취소된 예약은 마지막으로
    if (isACanceled && !isBCanceled) return 1;
    if (!isACanceled && isBCanceled) return -1;

    // 둘 다 취소건인 경우 시간 비교
    return timeDiff;
  });
};
