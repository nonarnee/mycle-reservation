import { Reservation } from '@/types/reservation';
import { formatTimeString, compareTimeStrings } from '@/utils/date';
import { sortReservations } from '@/utils/reservation';

export interface ReservationGroup {
  time: string;
  reservations: Reservation[];
}

/**
 * 예약 목록을 시간대별로 그룹화
 */
export const groupByReservedTime = (list: Reservation[]): ReservationGroup[] => {
  const grouped = new Map<string, Reservation[]>();

  // 시간대별로 그룹화
  list.forEach((item) => {
    const time = formatTimeString(item.reservedAt);
    const current = grouped.get(time) ?? [];
    grouped.set(time, [...current, item]);
  });

  // 각 그룹 내부 예약을 상태와 시간순으로 정렬
  const groupedArray = Array.from(grouped.entries()).map(([time, reservations]) => ({
    time,
    reservations: sortReservations(reservations),
  }));

  // 시간대순으로 정렬
  return groupedArray.sort((a, b) => compareTimeStrings(a.time, b.time));
};
