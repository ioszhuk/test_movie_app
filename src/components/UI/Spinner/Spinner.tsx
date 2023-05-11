import {FC, memo} from 'react';
import styles from './Spinner.module.scss';

export const Spinner: FC = memo(() => (
  <div className={styles.spinner}>
    <div className={styles.round}>
      <div></div>
    </div>
  </div>
));
