import React, { useRef } from 'react';
import { navLinks } from 'constants/navigationLinks';
import NavButton from 'components/UI/NavButton/NavButton';
import { socialLinks } from 'constants/socialLinks';
import {
  BurgerBtn,
  IconLink,
  MobileMenu,
  MobileMenuContent,
  NavButtons,
  SocialIcons,
} from './BurgerMenu.styles';
import { useClickOutside } from 'hooks/useClickOutside';
import { useBurgerMenu } from 'hooks/useBurgerMenu';

export const BurgerMenu: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useClickOutside([menuRef, buttonRef], () => setIsOpen(false));
  const { isOpen, setIsOpen, toggleMenu, closeMenu } = useBurgerMenu();

  return (
    <>
      <BurgerBtn ref={buttonRef} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </BurgerBtn>

      <MobileMenu ref={menuRef} $isOpen={isOpen}>
        <MobileMenuContent>
          <NavButtons>
            {navLinks.map(({ to, title }) => (
              <NavButton
                key={title}
                title={title}
                to={to}
                $mobile={true}
                onClick={closeMenu}
              />
            ))}
          </NavButtons>

          <SocialIcons>
            {socialLinks.map(item => (
              <IconLink key={item.alt}>{item.icon}</IconLink>
            ))}
          </SocialIcons>
        </MobileMenuContent>
      </MobileMenu>
    </>
  );
};
