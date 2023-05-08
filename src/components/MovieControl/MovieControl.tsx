import {memo} from 'react';
import {clsx} from 'clsx';
import {MovieFilterContainer} from '../MovieFilter/MovieFilterContainer';
import {MovieSortContainer} from '../MovieSort/MovieSortContainer';
import styles from './MovieControl.module.scss';

export const MovieControl = memo(() => {
  return (
    <div className={styles.movie_control}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.filter}>
          <MovieFilterContainer />
        </div>
        <div className={styles.sort}>
          <MovieSortContainer />
        </div>
      </div>
    </div>
  );
});
