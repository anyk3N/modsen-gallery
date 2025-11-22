import { useEffect } from 'react';

export const useClickOutside = (
  refs: React.RefObject<HTMLElement | null>[],
  handler: () => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as Node;
      if (refs.some(ref => ref.current && ref.current.contains(target))) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [refs, handler]);
};
