import styled from 'styled-components';
import { colors } from 'styles/Variables';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.headerBackground};
  height: 109px;
  padding: 0 100px;
  @media (max-width: 1024px) {
    padding: 0 40px;
  }
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const NavBar = styled.nav`
  font-family: 'Roboto', sans-serif;
  display: flex;
  color: #ffffff;
  gap: 31px;
  @media (max-width: 1024px) {
    gap: 20px;
    font-size: 20px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  transition: transform 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 767px) {
    width: 85%;
  }
`;
