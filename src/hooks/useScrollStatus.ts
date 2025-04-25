import { useEffect, useState } from 'react';

export function useScrollStatus(ref: React.RefObject<HTMLElement | null>) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    let timeout: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // 150ms 이내 스크롤 없으면 스크롤을 멈춘 것으로 간주
        setIsScrolling(false);
      }, 150);
    };

    el.addEventListener('scroll', onScroll);
    return () => {
      el.removeEventListener('scroll', onScroll);
      clearTimeout(timeout);
    };
  }, [ref]);

  return { isScrolling };
}
