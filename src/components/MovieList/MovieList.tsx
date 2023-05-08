import {FC, memo} from 'react';
import {clsx} from 'clsx';
import {IMovie} from '../../models/IMovie';
import {MovieListItem} from '../MovieListItem/MovieListItem';
import styles from './MovieList.module.scss';

interface MovieListProps {
  movies: IMovie[];
}

export const MovieList: FC<MovieListProps> = memo(({movies}) => {
  return (
    <div className={styles.list}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.grid_list}>
          {movies.map((movie: IMovie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
});
