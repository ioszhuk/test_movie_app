import styles from './Footer.module.scss';
import {clsx} from 'clsx';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.copyright}>© Copyright 2023 MovieX. All rights reserved.</div>
      </div>
    </div>
  );
};
