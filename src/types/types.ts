import React from 'react';

export interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
  };
  cover_photo: {
    urls: {
      regular: string;
    };
  };
  alt_description: string;
  title: string;
  links: {
    html: string;
  };
}

export type NavButtonProps = {
  Icon?: React.ComponentType<{ color: string; fill: string }>;
  title: string;
  to: string;
  isActive?: boolean;
};

export interface ExtendedNavButtonProps extends NavButtonProps {
  $mobile?: boolean;
  onClick?: () => void;
}

export interface IconsProps {
  color?: string;
  $isActive?: boolean;
  fill?: string;
  onClick?: () => void;
}
