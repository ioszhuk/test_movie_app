import {FC} from 'react';
import {clsx} from 'clsx';
import styles from './NotFound.module.scss';

interface INotFound {
  message: string;
}

export const NotFound: FC<INotFound> = ({message}) => {
  return (
    <div className={styles.not_found}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.title}>{message}</div>
      </div>
    </div>
  );
};
