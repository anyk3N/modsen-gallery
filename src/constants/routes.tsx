import React from 'react';
import CategoryPage from 'pages/CategoryPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import ImagesPage from 'pages/ImagesPage';
import FavouritesPage from 'pages/FavouritesPage';

export const ROUTES = [
  { path: '/', element: <CategoryPage /> },
  { path: '/images', element: <ImagesPage /> },
  { path: '/images/:category', element: <ImagesPage /> },
  { path: '/favourites', element: <FavouritesPage /> },
  { path: '*', element: <NotFoundPage /> },
];
