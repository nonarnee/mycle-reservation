import { useParams } from 'react-router';

import Button from '@/ui/Button';
import FixedBottomCTA from '@/ui/FixedBottomCTA';

import useReservationConfirmModal from '../hooks/useReservationConfirmModal';
import useReservationDeferModal from '../hooks/useReservationDeferModal';
import useReservation from '../hooks/queries/useReservation';

export default function ReservationCTA() {
  const { id } = useParams<{ id: string }>();
  const { data: reservation } = useReservation({ id: id ?? '' });

  const { open: openConfirmModal } = useReservationConfirmModal();
  const { open: openDeferModal } = useReservationDeferModal();

  const handleClickConfirm = () => {
    if (reservation) {
      openConfirmModal(reservation);
    }
  };

  const handleClickDefer = () => {
    if (reservation) {
      openDeferModal(reservation);
    }
  };

  return (
    <FixedBottomCTA
      primary={
        <Button
          variant="primary"
          size="medium"
          fullWidth
          disabled={!reservation}
          onClick={handleClickConfirm}
        >
          예약 확정
        </Button>
      }
      secondary={
        <Button
          variant="dark"
          size="medium"
          fullWidth
          disabled={!reservation}
          onClick={handleClickDefer}
        >
          예약 불가
        </Button>
      }
      border
    />
  );
}
