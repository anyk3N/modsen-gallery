import NavButton from 'components/UI/NavButton/NavButton';
import { navLinks } from 'constants/navigationLinks';
import { socialLinks } from 'constants/socialLinks';
import { useClickOutside } from 'hooks/useClickOutside';
import { useToggle } from 'hooks/useToggle';
import React, { useRef } from 'react';

import {
  BurgerBtn,
  IconLink,
  MobileMenu,
  MobileMenuContent,
  NavButtons,
  SocialIcons,
} from './BurgerMenu.styles';

export const BurgerMenu: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useClickOutside([menuRef, buttonRef], () => setIsOpen(false));
  const { isOpen, setIsOpen, toggle, close } = useToggle({ lockScroll: true });

  return (
    <>
      <BurgerBtn ref={buttonRef} onClick={toggle}>
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
                onClick={close}
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
