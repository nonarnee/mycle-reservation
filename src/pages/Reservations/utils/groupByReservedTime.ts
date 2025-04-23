import { format, parse } from 'date-fns';
import { ko } from 'date-fns/locale';

import { Reservation } from '@/types/reservation';

export const groupByReservedTime = (list: Reservation[]) => {
  const grouped = new Map<string, Reservation[]>();

  list.forEach((item) => {
    const time = format(new Date(item.reservedAt), 'a h:mm', { locale: ko });
    const current = grouped.get(time) ?? [];
    grouped.set(time, [...current, item]);
  });

  return Array.from(grouped.entries()).sort(([a], [b]) => {
    const timeA = parse(a, 'a h:mm', new Date(), { locale: ko });
    const timeB = parse(b, 'a h:mm', new Date(), { locale: ko });

    return timeA.getTime() - timeB.getTime();
  });
};
