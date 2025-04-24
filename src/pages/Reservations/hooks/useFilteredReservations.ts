import { useMemo } from 'react';

import { ReservationStatus } from '@/types/reservation';

import { useReservationFilterStore } from '../stores/reservationFilterStore';
import { applyLocalStatus } from '../utils/applyLocalStatus';

import useInfiniteReservations from './queries/useInfiniteReservations';

export default function useFilteredReservations() {
  const { hideCancelled, selectedDate } = useReservationFilterStore();

  const { data: reservationData, ...rest } = useInfiniteReservations({
    date: selectedDate,
    page: 1,
    per_page: 20,
  });

  const filteredReservations = useMemo(() => {
    if (!reservationData?.reservations) return [];

    const updatedReservations = applyLocalStatus(reservationData.reservations);

    if (hideCancelled) {
      return updatedReservations.filter(
        (reservation) =>
          reservation.status !== ReservationStatus.CANCELLED &&
          reservation.status !== ReservationStatus.DEFERRED,
      );
    }

    return updatedReservations;
  }, [reservationData, hideCancelled]);

  return {
    reservations: filteredReservations,
    isEmpty: filteredReservations.length === 0,
    ...rest,
  };
}
