import styled from 'styled-components';
import { colors } from 'styles/Variables';
import { NavLink } from 'react-router-dom';

export const NavBtn = styled(NavLink)<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  color: ${colors.primary};
  &:hover {
    color: ${colors.special};
    transition: transform 0.4s ease;
    transform: scale(1.1);
  }
`;

export const NavLabel = styled.p`
  font-weight: 400;
  font-size: 24px;
  transition: color 0.2s ease;
`;
