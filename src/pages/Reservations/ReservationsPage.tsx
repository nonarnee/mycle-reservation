import { PageAnimationLayout } from '../PageAnimationLayout';

import ReservationsContent from './components/ReservationsContent';
import ReservationsHeader from './components/ReservationsHeader';

export default function ReservationsPage() {
  return (
    <PageAnimationLayout
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -150 }}
      transition={{ duration: 0.3 }}
    >
      <ReservationsHeader />
      <ReservationsContent />
    </PageAnimationLayout>
  );
}
