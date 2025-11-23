import modsen from 'assets/icons/modsen.svg';
import {
  FooterBrand,
  FooterContainer,
  FooterSec,
  FooterSpan,
  FooterText,
  IconLink,
  LinkList,
  LinkTitle,
  Logo,
  SocialIcons,
} from 'components/Footer/Footer.styles';
import { footerLinks, socialLinks } from 'constants/socialLinks';
import React from 'react';

const Footer = () => {
  return (
    <FooterSec>
      <FooterContainer>
        <FooterBrand>
          <Logo href="/">
            <img src={modsen} alt="Modsen image" />
          </Logo>
          <FooterText>
            We have images that capture every mood and inspire every vision. From
            breathtaking landscapes to vibrant portraits.
          </FooterText>
          <SocialIcons>
            {socialLinks.map(item => (
              <ul key={item.alt}>
                <IconLink key={item.alt}>{item.icon}</IconLink>
              </ul>
            ))}
          </SocialIcons>
        </FooterBrand>
        {footerLinks.map(column => (
          <div key={column.title}>
            <LinkTitle>{column.title}</LinkTitle>
            <LinkList>
              {column.links.map(link => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </LinkList>
          </div>
        ))}
      </FooterContainer>
      <FooterSpan>Photo.gallery © 2000-2025, All Rights Reserved</FooterSpan>
    </FooterSec>
  );
};

export default Footer;
