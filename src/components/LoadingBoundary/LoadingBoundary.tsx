import styles from './LoadingBoundary.module.scss';
import {Spinner} from '../Spinner/Spinner';

export const LoadingBoundary = () => (
  <div className={styles.total_loading}>
    <Spinner />
  </div>
);
