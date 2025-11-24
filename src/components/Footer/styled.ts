import styled from 'styled-components';
import mixins from 'styles/mixins';

export const FooterSec = styled.footer`
  ${({ theme }) => mixins.gradientBg(theme, 'footer')}
  color: ${p => p.theme.colors.background};
  padding: 48px 0;
  ${({ theme }) => mixins.mqMax(theme, 'sm')} {
    padding: 32px 0;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 265px repeat(4, minmax(120px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  align-items: start;
  padding: 0 16px;

  ${({ theme }) => mixins.mqMax(theme, 'xl')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => mixins.mqMax(theme, 'md')} {
    grid-template-columns: repeat(2, 1fr);
    & > div:first-child {
      grid-column: 1 / -1;
    }
    & img {
      max-width: 220px;
      height: auto;
    }
  }

  ${({ theme }) => mixins.mqMax(theme, 'sm')} {
    grid-template-columns: 1fr;
    & img {
      max-width: 180px;
      height: auto;
    }
  }
`;

export const FooterBrand = styled.div`
  max-width: 265px;
  width: 100%;
`;

export const Logo = styled.a`
  display: block;
  margin-bottom: 25px;
  img {
    display: block;
    width: 100%;
    max-width: 265px;
    height: auto;
  }

    ${({ theme }) => mixins.mqMax(theme, 'md')} {
        img {
            max-width: 200px;
        }
    }
    ${({ theme }) => mixins.mqMax(theme, 'sm')} {
        img {
            max-width: 180px;
        }
`;

export const FooterText = styled.p`
  margin-bottom: 25px;
  color: ${p => p.theme.colors.textMuted};
`;

export const SocialIcons = styled.ul`
  display: flex;
  gap: 10px;
`;

export const IconLink = styled.li`
  cursor: pointer;

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

export const LinkTitle = styled.h3`
  font-family: ${p => p.theme.fonts.roboto};
  font-weight: 400;
  font-size: 20px;
  line-height: 90%;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
  margin-bottom: 24px;
  ${({ theme }) => mixins.mqMax(theme, 'sm')} {
    font-size: 18px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0;
  margin: 0;
  font-family: ${p => p.theme.fonts.roboto};
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${p => p.theme.colors.textMuted};
  list-style: none;
  li {
    transition: color 0.3s;
    a {
      color: inherit;
      text-decoration: none;
    }
    &:hover {
      color: #3498db;
    }
  }
  ${({ theme }) => mixins.mqMax(theme, 'sm')} {
    display: none;
  }
`;

export const FooterSpan = styled.span`
  display: block;
  color: ${p => p.theme.colors.textMuted};
  margin-top: 28px;
  text-align: center;
`;
