import React from 'react';
import { ExtendedNavButtonProps } from 'types/types';

import * as S from './styled';

const NavButton = ({ Icon, title, to, $mobile, onClick }: ExtendedNavButtonProps) => {
  return (
    <S.NavBtn to={to} $mobile={$mobile} onClick={onClick}>
      {({ isActive }) => (
        <>
          {!$mobile && Icon && (
            <Icon color={isActive ? '#f17900' : 'white'} fill="none" />
          )}
          <S.NavLabel color={isActive ? '#f17900' : 'white'} $mobile={$mobile}>
            {title}
          </S.NavLabel>
        </>
      )}
    </S.NavBtn>
  );
};

export default NavButton;
