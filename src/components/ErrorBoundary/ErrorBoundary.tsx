import React, { Component, ErrorInfo, ReactNode } from 'react';

import ErrorFallback from './ErrorFallback';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorFallback error={error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
