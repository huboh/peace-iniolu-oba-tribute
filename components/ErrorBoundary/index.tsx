import { FC, ReactNode, Component } from 'react';
import ErrorScreen from '../ErrorScreen';

export interface ErrorBoundaryProps {
  children: ReactNode;
  Fallback?: FC<{ error: Error; }>;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return {
      error
    };
  }

  public render() {
    const { error } = this.state;
    const { children, Fallback } = this.props;

    if (error) {
      return (
        Fallback ? <Fallback error={ error } /> : <ErrorScreen error={ error } />
      );
    };

    return children;
  }
}