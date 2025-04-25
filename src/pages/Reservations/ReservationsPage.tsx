import { useRef } from 'react';

import { useScrollStatus } from '@/hooks/useScrollStatus';

import { PageAnimationLayout } from '../PageAnimationLayout';

import ReservationsContent from './components/ReservationsContent';
import ReservationsHeader from './components/ReservationsHeader';

export default function ReservationsPage() {
  const contentRef = useRef<HTMLElement>(null);
  const { isScrolling } = useScrollStatus(contentRef);

  return (
    <PageAnimationLayout
      initial={{ opacity: 0, x: -250 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -250 }}
      transition={{ duration: 0.3 }}
    >
      <ReservationsHeader hasShadow={isScrolling} />
      <ReservationsContent ref={contentRef} />
    </PageAnimationLayout>
  );
}
