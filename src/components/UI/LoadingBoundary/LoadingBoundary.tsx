import {FC, memo} from 'react';
import {Spinner} from '../Spinner/Spinner';
import styles from './LoadingBoundary.module.scss';

export const LoadingBoundary: FC = memo(() => (
  <div className={styles.total_loading}>
    <Spinner />
  </div>
));
