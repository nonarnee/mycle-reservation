import { getStatusMap } from '@/lib/storage/reservationStatus';
import { Reservation } from '@/types/reservation';

export const applyLocalStatus = (reservations: Reservation[]) => {
  const map = getStatusMap();

  return reservations.map((rsv) => ({
    ...rsv,
    status: map[rsv.serverId] ?? rsv.status,
  }));
};
