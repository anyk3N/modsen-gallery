import CategoryPage from 'pages/CategoryPage';
import FavouritesPage from 'pages/FavouritesPage';
import ImagesPage from 'pages/ImagesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import React from 'react';

export const ROUTES = [
  { path: '/', element: <CategoryPage /> },
  { path: '/images', element: <ImagesPage /> },
  { path: '/images/:category', element: <ImagesPage /> },
  { path: '/favourites', element: <FavouritesPage /> },
  { path: '*', element: <NotFoundPage /> },
];
