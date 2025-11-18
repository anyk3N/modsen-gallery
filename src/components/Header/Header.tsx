import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/icons/modsen.svg';
import { HeaderContainer, LogoImage, NavBar } from 'components/Header/Header.styles';
import NavButton from 'components/UI/NavButton/NavButton';
import { BurgerMenu } from 'components/UI/BurgerMenu/BurgerMenu';
import { navLinks } from 'constants/navigationLinks';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImage src={logo} alt="modsen-logo" />
      </Link>

      <NavBar>
        {navLinks.map(({ to, Icon, title }) => (
          <NavButton key={title} Icon={Icon} title={title} to={to} />
        ))}
      </NavBar>

      <BurgerMenu />
    </HeaderContainer>
  );
};

export default Header;
