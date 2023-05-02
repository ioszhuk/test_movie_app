import {Component, ErrorInfo} from 'react';
import {ErrorIndicator} from '../ErrorIndicator/ErrorIndicator';
import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: string | JSX.Element | JSX.Element[];
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.total_error}>
          <ErrorIndicator message="Total Application Error!" />
        </div>
      );
    }

    return this.props.children;
  }
}
