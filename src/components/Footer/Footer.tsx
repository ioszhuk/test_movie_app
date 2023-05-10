import {FC, memo} from 'react';
import {clsx} from 'clsx';
import styles from './Footer.module.scss';

export const Footer: FC = memo(() => (
  <div className={styles.footer}>
    <div className={clsx('container', styles.container)}>
      <div className={styles.copyright}>© Copyright 2023 MovieX. All rights reserved.</div>
    </div>
  </div>
));
