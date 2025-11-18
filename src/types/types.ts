import React, { ReactNode } from 'react';

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

interface BaseCardProps {
  url: string;
}

export interface ImageCardProps extends BaseCardProps {
  title: string;
  onClick: () => void;
  favClick: () => void;
  isActive: boolean;
}

export interface CategoryCardProps extends BaseCardProps {
  category: string;
}

export interface SelectorProps {
  options: {
    value: string;
    name: string;
  }[];
  defaultValue: string;
  onSortChange: (value: string) => void;
}

export type ImagesListProps = {
  searchQuery: string;
};

export interface PhotoModalProps {
  photos: UnsplashPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export type FavouritesContextType = {
  favourites: UnsplashPhoto[];
  toggleFavourite: (photo: UnsplashPhoto) => void;
  isFavourite: (id: string) => boolean;
};

export interface FavouritesProviderProps {
  children: ReactNode;
}

export type NavButtonProps = {
  Icon?: React.ComponentType<{ color: string; fill: string }>;
  title: string;
  to: string;
  isActive?: boolean;
};

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface ExtendedNavButtonProps extends NavButtonProps {
  $mobile?: boolean;
  onClick?: () => void;
}

export interface IconsProps {
  color?: string;
  isActive?: boolean;
  fill?: string;
  onClick?: () => void;
}
