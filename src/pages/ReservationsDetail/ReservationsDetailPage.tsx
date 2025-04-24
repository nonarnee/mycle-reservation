import { PageAnimationLayout } from '../PageAnimationLayout';

import ReservationHeader from './components/ReservationDetailHeader';
import ReservationContent from './components/ReservationDetailContent';
import ReservationCTA from './components/ReservationCTA';

export default function ReservationsDetailPage() {
  return (
    <>
      <PageAnimationLayout
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 150 }}
        transition={{ duration: 0.3 }}
      >
        <ReservationHeader />
        <ReservationContent />
      </PageAnimationLayout>

      {/* fixed 특성상 애니메이션 적용시 위치가 튀는 현상 발생 */}
      <ReservationCTA />
    </>
  );
}
