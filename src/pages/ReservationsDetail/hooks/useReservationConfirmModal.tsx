import { useMemo } from 'react';
import { useOverlay } from '@toss/use-overlay';

import { ReservationDetail } from '@/types/reservation';
import ReservationConfirmModal from '@/pages/ReservationsDetail/components/Modal/ReservationConfirmModal';

export default function useReservationConfirmModal() {
  const overlay = useOverlay();

  return useMemo(
    () => ({
      open: (reservation: ReservationDetail) =>
        overlay.open(({ isOpen, close }) => (
          <ReservationConfirmModal isOpen={isOpen} close={close} reservation={reservation} />
        )),
      close: overlay.close,
    }),
    [overlay],
  );
}
