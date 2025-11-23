import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/Variables';

export const NavBtn = styled(NavLink)<{ isActive?: boolean; $mobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  padding: ${({ $mobile }) => ($mobile ? '12px 20px' : '0')};
  color: ${colors.primary};
  &:hover {
    color: ${colors.special};
    transition: transform 0.4s ease;
    transform: scale(1.1);
  }
  &:hover {
    background: ${({ $mobile }) => ($mobile ? 'rgba(255, 255, 255, 0.05)' : 'none')};
  }
`;

export const NavLabel = styled.p<{ $mobile?: boolean; color?: string }>`
  font-weight: 400;
  transition: color 0.2s ease;
  color: ${({ color }) => color || 'white'};
  font-size: ${({ $mobile }) => ($mobile ? '18px' : '24px')};
`;
