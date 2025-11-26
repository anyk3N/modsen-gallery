import React from 'react';

const CategoryPage = React.lazy(() => import('pages/Category'));
const ImagesPage = React.lazy(() => import('pages/Images'));
const FavouritePage = React.lazy(() => import('pages/Favourites'));
const NotFoundPage = React.lazy(() => import('pages/NotFound'));

export const ROUTES = [
  { path: '/', element: CategoryPage },
  { path: '/images', element: ImagesPage },
  { path: '/images/:category', element: ImagesPage },
  { path: '/favourites', element: FavouritePage },
  { path: '*', element: NotFoundPage },
];
