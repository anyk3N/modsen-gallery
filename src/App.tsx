import React from 'react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { ROUTES } from './constants/routes';
import { Wrapper } from './styles/Wrapper';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
