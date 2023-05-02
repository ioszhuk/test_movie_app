import {FC} from 'react';
import styles from './Header.module.scss';
import {clsx} from 'clsx';
import {Link} from 'react-router-dom';
import {MovieSearch} from '../MovieSearch/MovieSearch';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.logotype}>
          <Link to={'/'}>MovieX</Link>
        </div>
        <div className={styles.search}>
          <MovieSearch />
        </div>
      </div>
    </div>
  );
};
