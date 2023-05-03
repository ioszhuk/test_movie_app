import {FC} from 'react';
import {clsx} from 'clsx';
import {Link} from 'react-router-dom';
import {MovieSearchContainer} from '../MovieSearch/MovieSearchContainer';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.logotype}>
          <Link to={'/'}>MovieX</Link>
        </div>
        <div className={styles.search}>
          <MovieSearchContainer />
        </div>
      </div>
    </div>
  );
};
