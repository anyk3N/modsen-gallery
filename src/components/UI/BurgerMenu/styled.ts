import styled, { keyframes } from 'styled-components';
import mixins from 'styles/mixins';

export const BurgerBtn = styled.button`
  display: none;
  ${({ theme }) => mixins.mqMax(theme, 'md')} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
      display: block;
      height: 4px;
      width: 100%;
      background-color: ${p => p.theme.colors.accent};
      border-radius: 2px;
    }
  }
`;

export const slideDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  ${({ theme }) => mixins.mqMax(theme, 'md')} {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 109px;
    left: 0;
    right: 0;
    background: ${p => p.theme.colors.headerBg};
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    animation: ${slideDown} 0.3s ease forwards;
    z-index: 100;
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const NavButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
`;

export const SocialIconsMobile = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const IconLink = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition:
      transform 0.25s ease,
      fill 0.25s ease;

    &:hover {
      transform: scale(1.1);
      fill: ${p => p.theme.colors.accent};

      path {
        fill: ${p => p.theme.colors.primary};
      }
    }
  }
`;
