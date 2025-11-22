import { useState } from 'react';

export const useBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const closeMenu = () => setIsOpen(false);

  return { isOpen, setIsOpen, toggleMenu, closeMenu };
};
