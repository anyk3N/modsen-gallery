import { useState, useEffect, useCallback } from 'react';

type UseOpenOptions = {
  lockScroll?: boolean;
};

export const useToggle = (options?: UseOpenOptions) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    if (options?.lockScroll && isOpen) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen, options?.lockScroll]);

  return { isOpen, open, close, toggle, setIsOpen };
};
