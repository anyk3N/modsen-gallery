import modsen from 'assets/icons/modsen.svg';
import { footerLinks, socialLinks } from 'constants/socialLinks';
import React from 'react';

import * as S from './styled';

export const Footer = () => {
  return (
    <S.FooterSec>
      <S.FooterContainer>
        <S.FooterBrand>
          <S.Logo href="/">
            <img src={modsen} alt="Modsen image" />
          </S.Logo>
          <S.FooterText>
            We have images that capture every mood and inspire every vision. From
            breathtaking landscapes to vibrant portraits.
          </S.FooterText>
          <S.SocialIcons>
            {socialLinks.map(item => (
              <ul key={item.alt}>
                <S.IconLink key={item.alt}>{item.icon}</S.IconLink>
              </ul>
            ))}
          </S.SocialIcons>
        </S.FooterBrand>
        {footerLinks.map(column => (
          <div key={column.title}>
            <S.LinkTitle>{column.title}</S.LinkTitle>
            <S.LinkList>
              {column.links.map(link => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </S.LinkList>
          </div>
        ))}
      </S.FooterContainer>
      <S.FooterSpan>Modsen.gallery © 2000-2025, All Rights Reserved</S.FooterSpan>
    </S.FooterSec>
  );
};
