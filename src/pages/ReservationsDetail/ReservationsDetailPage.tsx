import Button from '@/ui/Button';
import FixedBottomCTA from '@/ui/FixedBottomCTA';

import ReservationContent from './components/ReservationDetailContent';
import ReservationHeader from './components/ReservationDetailHeader';

export default function ReservationsDetailPage() {
  return (
    <>
      <ReservationHeader />
      <ReservationContent />
      <FixedBottomCTA
        primary={
          <Button variant="primary" size="medium" fullWidth>
            예약 확정
          </Button>
        }
        secondary={
          <Button variant="dark" size="medium" fullWidth>
            예약 불가
          </Button>
        }
        border
      />
    </>
  );
}
