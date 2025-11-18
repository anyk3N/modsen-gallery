import React, { useState } from 'react';
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

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BurgerBtn onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </BurgerBtn>

      <MobileMenu $isOpen={isOpen}>
        <MobileMenuContent>
          <NavButtons>
            {navLinks.map(({ to, title }) => (
              <NavButton
                key={title}
                title={title}
                to={to}
                $mobile={true}
                onClick={() => setIsOpen(false)} // Закрытие меню при клике
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
