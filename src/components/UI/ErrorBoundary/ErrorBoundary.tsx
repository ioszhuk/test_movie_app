import {Component, ErrorInfo, JSX} from 'react';
import {ErrorIndicator} from '../ErrorIndicator/ErrorIndicator';
import styles from './ErrorBoundary.module.scss';

interface IErrorBoundaryProps {
  children: string | JSX.Element | JSX.Element[];
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  state: IErrorBoundaryState = {
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
