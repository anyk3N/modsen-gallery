import React from 'react';
import { NavBtn, NavLabel } from './NavButton.styles';

type NavButtonProps = {
  isActive?: boolean;
  Icon: React.ComponentType<{ color?: string }>;
  title: string;
  to: string;
};

const NavButton = ({ Icon, to, title }: NavButtonProps) => {
  return (
    <NavBtn to={to}>
      {({ isActive }) => (
        <>
          <Icon color={isActive ? 'red' : 'white'} />
          <NavLabel color={isActive ? 'red' : 'white'}>{title}</NavLabel>
        </>
      )}
    </NavBtn>
  );
};

export default NavButton;
