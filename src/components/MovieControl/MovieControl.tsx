import {clsx} from 'clsx';
import {MovieFilterContainer} from '../MovieFilter/MovieFilterContainer';
import {MovieSort} from '../MovieSort/MovieSort';
import styles from './MovieControl.module.scss';

export const MovieControl = () => {
  return (
    <div className={styles.movie_control}>
      <div className={clsx('container', styles.container)}>

        <div className={styles.filter}>
          <MovieFilterContainer />
        </div>

        <div className={styles.sort}>
          <MovieSort />
        </div>

      </div>
    </div>
  );
};
