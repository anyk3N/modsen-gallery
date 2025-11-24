import App from 'components/App/App';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { ErrorFallback } from 'components/ErrorBoundary/ErrorFallback';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/Variables';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
);
