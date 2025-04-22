import Spacing from '@/ui/Spacing';

import ReservationGroup from './ReservationGroup';

interface Props {
  dailyReservations: [];
}

export default function ReservationList({ dailyReservations = [] }: Props) {
  return (
    <>
      <Spacing size={4} />
      <ReservationGroup time="오전 10:00" />
      <ReservationGroup time="오전 11:00" />
      <Spacing size={64} />
    </>
  );
}
