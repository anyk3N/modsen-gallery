import { Layout } from 'components/Layout/Layout';
import { ROUTES } from 'constants/routes';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from 'styles/Wrapper';
import { FavouritesProvider } from 'utils/context/FavouriteContext';

function App() {
  return (
    <FavouritesProvider>
      <GlobalStyles />
      <Wrapper>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                {ROUTES.map(route => {
                  const Element = route.element;
                  return (
                    <Route key={route.path} path={route.path} element={<Element />} />
                  );
                })}
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Wrapper>
    </FavouritesProvider>
  );
}

export default App;
