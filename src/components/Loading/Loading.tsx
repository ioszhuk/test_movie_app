import {FC} from 'react';
import {Spinner} from '../Spinner/Spinner';
import {ErrorIndicator} from '../ErrorIndicator/ErrorIndicator';
import styles from './Loading.module.scss';

interface ILoadingProps {
  isLoading: boolean;
  isError: boolean;
  error: string;
  children: any;
}

export const Loading: FC<ILoadingProps> = ({isLoading, isError, error, children}) => {
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.loading}>
        <ErrorIndicator message={error} />
      </div>
    );
  }

  return children;
};
