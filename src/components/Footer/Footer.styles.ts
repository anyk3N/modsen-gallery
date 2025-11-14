import styled from 'styled-components';

export const FooterSec = styled.footer`
  background: linear-gradient(90deg, #343333 44.73%, #484848 65.63%, #282828 98.63%);
  color: #ecf0f1;
  padding: 48px 0;
  @media (max-width: 420px) {
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

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    & > div:first-child {
      grid-column: 1 / -1;
    }
    & img {
      max-width: 220px;
      height: auto;
    }
  }

  @media (max-width: 420px) {
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
    
    @media(max-width: 700px) {
        img {
            max-width: 200px;
    }
    @media(max-width: 420px) {
        img {
            max-width: 180px;}
`;

export const FooterText = styled.p`
  margin-bottom: 25px;
  color: #ffffff96;
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
      fill: #e0a449;
      path {
        fill: #ffffff;
      }
    }
  }
`;

export const LinkTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 90%;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #e0a449;
  margin-bottom: 24px;
  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff96;
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
  @media (max-width: 420px) {
    display: none;
  }
`;

export const FooterSpan = styled.span`
  display: block;
  color: #ffffff96;
  margin-top: 28px;
  text-align: center;
`;
