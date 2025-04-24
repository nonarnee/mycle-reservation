import { ReservationStatus } from '@/types/reservation';

import { local } from './local';

type ReservationStatusMap = {
  [reservationId: number]: ReservationStatus;
};

const STORAGE_KEY = 'reservation-status-map';

export const getStatusMap = (): ReservationStatusMap => {
  return local.get<ReservationStatusMap>(STORAGE_KEY) ?? {};
};

export const setStatus = (id: number, status: ReservationStatus) => {
  const current = getStatusMap();
  current[id] = status;
  local.set(STORAGE_KEY, current);
};

export const removeStatus = (id: number) => {
  const current = getStatusMap();
  delete current[id];
  local.set(STORAGE_KEY, current);
};

export const clearAllStatuses = () => {
  local.remove(STORAGE_KEY);
};
