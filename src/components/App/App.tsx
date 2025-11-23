import Layout from 'components/Layout/Layout';
import { ROUTES } from 'constants/routes';
import React from 'react';
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
          <Routes>
            <Route element={<Layout />}>
              {ROUTES.map(route => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </FavouritesProvider>
  );
}

export default App;
