import React from 'react';
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
} from './Footer.styles';
import modsen from 'assets/icons/modsen.svg';
import { FacebookIcon, GitHubIcon, InstagramIcon, TwitterIcon } from '../UI/Icons/Icons';

const socialLinks = [
  { icon: <TwitterIcon />, alt: 'twitter' },
  { icon: <FacebookIcon />, alt: 'facebook' },
  { icon: <InstagramIcon />, alt: 'instagram' },
  { icon: <GitHubIcon />, alt: 'gitHub' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Works', href: '#' },
      { name: 'Career', href: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Customer Support', href: '#' },
      { name: 'Delivery Details', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'FAQ',
    links: [
      { name: 'Account', href: '#' },
      { name: 'Manage Deliveries', href: '#' },
      { name: 'Orders', href: '#' },
      { name: 'Payments', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Free eBooks', href: '#' },
      { name: 'Development Tutorial', href: '#' },
      { name: 'How to - Blog', href: '#' },
      { name: 'Youtube Playlist', href: '#' },
    ],
  },
];

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
