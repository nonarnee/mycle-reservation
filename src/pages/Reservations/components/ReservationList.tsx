import Spacing from '@/ui/Spacing';
import { Reservation } from '@/types/reservation';

import { groupByReservedTime } from '../utils/groupByReservedTime';

import ReservationGroup from './ReservationGroup';

interface Props {
  reservations: Reservation[];
}

export default function ReservationList({ reservations = [] }: Props) {
  const groupedReservations = groupByReservedTime(reservations);

  return (
    <>
      <Spacing size={4} />
      {groupedReservations.map(({ time, reservations }) => (
        <ReservationGroup key={time} time={time} reservations={reservations} />
      ))}
      <Spacing size={64} />
    </>
  );
}
