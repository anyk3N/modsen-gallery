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
