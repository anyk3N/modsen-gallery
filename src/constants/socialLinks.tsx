import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
} from 'components/UI/Icons/Icons';
import React from 'react';

export const socialLinks = [
  { icon: <TwitterIcon />, alt: 'twitter' },
  { icon: <FacebookIcon />, alt: 'facebook' },
  { icon: <InstagramIcon />, alt: 'instagram' },
  { icon: <GitHubIcon />, alt: 'gitHub' },
];

export const footerLinks = [
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
