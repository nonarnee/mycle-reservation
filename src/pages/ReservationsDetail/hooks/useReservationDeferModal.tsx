import { useMemo } from 'react';
import { useOverlay } from '@toss/use-overlay';

import { ReservationDetail } from '@/types/reservation';
import ReservationDeferModal from '@/pages/ReservationsDetail/components/Modal/ReservationDeferModal';
export default function useReservationDeferModal() {
  const overlay = useOverlay();

  return useMemo(
    () => ({
      open: (reservation: ReservationDetail) =>
        overlay.open(({ isOpen, close }) => (
          <ReservationDeferModal isOpen={isOpen} close={close} reservation={reservation} />
        )),
      close: overlay.close,
    }),
    [overlay],
  );
}
