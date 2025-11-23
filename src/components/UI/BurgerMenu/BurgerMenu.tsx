import NavButton from 'components/UI/NavButton/NavButton';
import { navLinks } from 'constants/navigationLinks';
import { socialLinks } from 'constants/socialLinks';
import { useClickOutside } from 'hooks/useClickOutside';
import { useToggle } from 'hooks/useToggle';
import React, { useRef } from 'react';

import * as S from './styled';

export const BurgerMenu: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useClickOutside([menuRef, buttonRef], () => setIsOpen(false));
  const { isOpen, setIsOpen, toggle, close } = useToggle({ lockScroll: true });

  return (
    <>
      <S.BurgerBtn ref={buttonRef} onClick={toggle}>
        <span />
        <span />
        <span />
      </S.BurgerBtn>

      <S.MobileMenu ref={menuRef} $isOpen={isOpen}>
        <S.MobileMenuContent>
          <S.NavButtons>
            {navLinks.map(({ to, title }) => (
              <NavButton
                key={title}
                title={title}
                to={to}
                $mobile={true}
                onClick={close}
              />
            ))}
          </S.NavButtons>

          <S.SocialIcons>
            {socialLinks.map(item => (
              <S.IconLink key={item.alt}>{item.icon}</S.IconLink>
            ))}
          </S.SocialIcons>
        </S.MobileMenuContent>
      </S.MobileMenu>
    </>
  );
};
