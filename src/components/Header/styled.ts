import styled from 'styled-components';
import mixins from 'styles/mixins';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${p => p.theme.colors.headerBg};
  height: 109px;
  padding: 0 100px;
  ${({ theme }) => mixins.mqMax(theme, 'lg')} {
    padding: 0 40px;
  }
  ${({ theme }) => mixins.mqMax(theme, 'md')} {
    padding: 0 20px;
  }
`;

export const NavBar = styled.nav`
  font-family: ${p => p.theme.fonts.roboto};
  display: flex;
  color: ${p => p.theme.colors.accent};
  gap: 31px;
  ${({ theme }) => mixins.mqMax(theme, 'lg')} {
    gap: 20px;
    font-size: 20px;
  }
  ${({ theme }) => mixins.mqMax(theme, 'md')} {
    display: none;
  }
`;

export const LogoImage = styled.img`
  ${mixins.transition('transform', '400ms')}
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  ${({ theme }) => mixins.mqMax(theme, 'lg')} {
    width: 90%;
  }
  ${({ theme }) => mixins.mqMax(theme, 'md')} {
    width: 85%;
  }
`;
