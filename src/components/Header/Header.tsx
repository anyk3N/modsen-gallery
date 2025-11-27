import logo from 'assets/icons/modsen.svg';
import { BurgerMenu } from 'components/UI/BurgerMenu/BurgerMenu';
import { NavButton } from 'components/UI/NavButton/NavButton';
import { navLinks } from 'constants/navigationLinks';
import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <Link to="/">
        <S.LogoImage src={logo} alt="modsen-logo" />
      </Link>

      <S.NavBar>
        {navLinks.map(({ to, Icon, title }) => (
          <NavButton key={title} Icon={Icon} title={title} to={to} />
        ))}
      </S.NavBar>

      <BurgerMenu />
    </S.HeaderContainer>
  );
};
