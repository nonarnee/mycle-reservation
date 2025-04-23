import { useEffect, useRef } from 'react';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
}

export const useInfiniteScroll = ({ fetchNextPage, hasNextPage, isFetchingNextPage }: Props) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = observerRef.current;
    if (!node || !hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isFetchingNextPage && hasNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return observerRef;
};
