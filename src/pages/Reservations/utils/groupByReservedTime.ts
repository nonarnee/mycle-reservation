import { format, parse } from 'date-fns';
import { ko } from 'date-fns/locale';

import { Reservation, ReservationStatus } from '@/types/reservation';

export const groupByReservedTime = (list: Reservation[]) => {
  const grouped = new Map<string, Reservation[]>();

  list.forEach((item) => {
    const time = format(new Date(item.reservedAt), 'a h:mm', { locale: ko });
    const current = grouped.get(time) ?? [];
    grouped.set(time, [...current, item]);
  });

  const sortedGrouped = Array.from(grouped.entries()).map(([time, reservations]) => {
    const sorted = [...reservations].sort((a, b) => {
      const isACanceled =
        a.status === ReservationStatus.CANCELLED || a.status === ReservationStatus.DEFERRED;
      const isBCanceled =
        b.status === ReservationStatus.CANCELLED || b.status === ReservationStatus.DEFERRED;

      // 예약 시간 정렬
      const timeDiff = new Date(a.reservedAt).getTime() - new Date(b.reservedAt).getTime();
      if (!isACanceled && !isBCanceled) return timeDiff;

      // 취소된 예약은 마지막으로
      if (isACanceled && !isBCanceled) return 1;
      if (!isACanceled && isBCanceled) return -1;

      // 둘 다 취소건인 경우 시간 비교
      return timeDiff;
    });

    return [time, sorted] as const;
  });

  return sortedGrouped.sort(([a], [b]) => {
    const timeA = parse(a, 'a h:mm', new Date(), { locale: ko });
    const timeB = parse(b, 'a h:mm', new Date(), { locale: ko });

    return timeA.getTime() - timeB.getTime();
  });
};
