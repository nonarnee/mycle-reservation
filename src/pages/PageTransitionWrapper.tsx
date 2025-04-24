import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>{children}</div>
    </AnimatePresence>
  );
}
