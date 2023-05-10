import {FC, memo} from 'react';
import {ErrorIcon} from '../icons/ErrorIcon';
import styles from './ErrorIndicator.module.scss';

interface IErrorIndicatorProps {
  message: string;
}

export const ErrorIndicator: FC<IErrorIndicatorProps> = memo(({message}) => (
  <>
    <div className={styles.icon}>
      <ErrorIcon />
    </div>
    <div className={styles.message}>{message}</div>
  </>
));
