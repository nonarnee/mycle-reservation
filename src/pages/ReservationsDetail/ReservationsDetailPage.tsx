import { motion } from 'framer-motion';

import PageTransitionWrapper from '../PageTransitionWrapper';

import ReservationHeader from './components/ReservationDetailHeader';
import ReservationContent from './components/ReservationDetailContent';
import ReservationCTA from './components/ReservationCTA';

export default function ReservationsDetailPage() {
  return (
    <>
      <PageTransitionWrapper>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.3 }}
        >
          <ReservationHeader />
          <ReservationContent />
        </motion.div>
      </PageTransitionWrapper>

      {/* fixed 특성상 애니메이션 적용시 위치가 튀는 현상 발생 */}
      <ReservationCTA />
    </>
  );
}
