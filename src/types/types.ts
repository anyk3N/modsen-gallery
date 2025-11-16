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

export interface CategoryCardProps extends BaseCardProps {
  category: string;
}

export type AsyncCallback<TArgs extends unknown[] = unknown[], TResult = unknown> = (
  ...args: TArgs
) => Promise<TResult>;

export type UseFetchingReturn<T extends AsyncCallback> = readonly [
  (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>> | undefined>,
  boolean,
  string,
];
