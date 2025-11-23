import { CategoryPage } from 'pages/Category';
import React from 'react';

import { FavouritePage } from '../pages/Favourites';
import { ImagesPage } from '../pages/Images';
import { NotFoundPage } from '../pages/NotFound';

export const ROUTES = [
  { path: '/', element: <CategoryPage /> },
  { path: '/images', element: <ImagesPage /> },
  { path: '/images/:category', element: <ImagesPage /> },
  { path: '/favourites', element: <FavouritePage /> },
  { path: '*', element: <NotFoundPage /> },
];
