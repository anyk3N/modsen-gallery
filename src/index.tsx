import App from 'App';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { ErrorFallback } from 'components/ErrorBoundary/ErrorFallback';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
