import { useMemo } from 'react';
import { useOverlay } from '@toss/use-overlay';
import { useNavigate } from 'react-router';

import { ReservationDetail } from '@/types/reservation';
import ReservationConfirmModal from '@/pages/ReservationsDetail/components/Modal/ReservationConfirmModal';

export default function useReservationConfirmModal() {
  const overlay = useOverlay();
  const navigate = useNavigate();

  return useMemo(
    () => ({
      open: (reservation: ReservationDetail) =>
        overlay.open(({ isOpen, close }) => (
          <ReservationConfirmModal
            isOpen={isOpen}
            close={close}
            reservation={reservation}
            onNavigate={navigate}
          />
        )),
      close: overlay.close,
    }),
    [overlay],
  );
}
