import {FC, memo} from 'react';
import {IMovie} from '../../models/IMovie';
import styles from './MovieSearch.module.scss';

interface MovieSearchListProps {
  movies: IMovie[];
  goToMovie(movie: IMovie): void;
}

export const MovieSearchResult: FC<MovieSearchListProps> = memo(({movies, goToMovie}) => {
  return (
    <ul className={styles.found_movie_list}>
      {movies.map((movie: IMovie) => (
        <li key={movie.id} onClick={() => goToMovie(movie)}>
          <figure>
            <img src={movie.img} alt={movie.name} />
          </figure>
          <span>{movie.name}</span>
        </li>
      ))}
    </ul>
  );
});
