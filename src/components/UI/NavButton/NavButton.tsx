import { NavBtn, NavLabel } from 'components/UI/NavButton/NavButton.styles';
import React from 'react';
import { ExtendedNavButtonProps } from 'types/types';

const NavButton = ({ Icon, title, to, $mobile, onClick }: ExtendedNavButtonProps) => {
  return (
    <NavBtn to={to} $mobile={$mobile} onClick={onClick}>
      {({ isActive }) => (
        <>
          {!$mobile && Icon && (
            <Icon color={isActive ? '#f17900' : 'white'} fill="none" />
          )}
          <NavLabel color={isActive ? '#f17900' : 'white'} $mobile={$mobile}>
            {title}
          </NavLabel>
        </>
      )}
    </NavBtn>
  );
};

export default NavButton;
