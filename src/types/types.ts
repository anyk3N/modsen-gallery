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
