import {FC, memo} from 'react';
import {IMovie} from '../../types/IMovie';
import styles from './MovieSearch.module.scss';

interface IMovieSearchListProps {
  movies: IMovie[];
  goToMovie: (movie: IMovie) => void;
}

export const MovieSearchResult: FC<IMovieSearchListProps> = memo(({movies, goToMovie}) => (
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
));
