import { useCallback, useEffect, useState } from 'react';
import type { UnsplashPhoto } from 'types/types';

import { useToggle } from './useToggle';

export const useModal = (photos: UnsplashPhoto[]) => {
  const { open, close } = useToggle({ lockScroll: true });
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = useCallback(
    (idx: number) => {
      setModalIndex(idx);
      open();
    },
    [open],
  );

  useEffect(() => {
    if (photos.length === 0) {
      setModalIndex(null);
      close();
    }
  }, [photos.length, close]);

  const closeModal = useCallback(() => {
    setModalIndex(null);
    close();
  }, [close]);

  const handlePrev = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + photos.length) % photos.length);
    }
  }, [modalIndex, photos.length]);

  const handleNext = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % photos.length);
    }
  }, [modalIndex, photos.length]);

  return { modalIndex, openModal, closeModal, handlePrev, handleNext };
};
