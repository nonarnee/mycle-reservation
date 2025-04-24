import { css } from '@emotion/react';
import { AnimatePresence, motion, MotionProps } from 'motion/react';
import { useLocation } from 'react-router';

export function PageAnimationLayout({ children, ...rest }: MotionProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        css={css`
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        `}
        {...rest}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
