import { motion } from 'framer-motion';

import PageTransitionWrapper from '../PageTransitionWrapper';

import ReservationsContent from './components/ReservationsContent';
import ReservationsHeader from './components/ReservationsHeader';

export default function ReservationsPage() {
  return (
    <PageTransitionWrapper>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -150 }}
        transition={{ duration: 0.3 }}
      >
        <ReservationsHeader />
        <ReservationsContent />
      </motion.div>
    </PageTransitionWrapper>
  );
}
