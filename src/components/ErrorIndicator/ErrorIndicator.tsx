import {FC} from 'react';
import {ErrorIcon} from '../icons/ErrorIcon';
import styles from './ErrorIndicator.module.scss';

interface ErrorIndicatorProps {
  message: string;
}

export const ErrorIndicator: FC<ErrorIndicatorProps> = ({message}) => {
  return (
    <>
      <div className={styles.icon}>
        <ErrorIcon />
      </div>
      <div className={styles.message}>
        {message}
      </div>
    </>
  );
};
