import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/icons/modsen.svg';
import { HeaderContainer, LogoImage, NavBar } from './Header.styles';
import NavButton from '../UI/NavButton/NavButton';
import { CategoryIcon, FavouriteIcon, ImageIcon } from '../Icons/Icons';
import { BurgerMenu } from '../UI/BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImage src={logo} alt="modsen-logo" />
      </Link>

      <NavBar>
        <NavButton Icon={CategoryIcon} title={'Category'} to={'/'} />
        <NavButton Icon={ImageIcon} title={'Images'} to={'/images'} />
        <NavButton Icon={FavouriteIcon} title={'Favourites'} to={'/favourites'} />
      </NavBar>
      <BurgerMenu />
    </HeaderContainer>
  );
};

export default Header;
