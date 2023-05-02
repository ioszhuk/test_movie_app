import {FC} from 'react';
import {IMovie} from '../../models/IMovie';
import {Link} from 'react-router-dom';
import styles from './MovieListItem.module.scss';

interface IMovieListItemProps {
  movie: IMovie;
}

export const MovieListItem: FC<IMovieListItemProps> = ({movie}) => {
  return (
    <Link key={movie.id} to={`/${movie.slug}`} className={styles.movie_item}>
      <div className={styles.poster}>
        <img src={movie.img} alt={movie.name} />
        <div className={styles.rating}>{movie.rate}</div>
      </div>
      <div className={styles.properties}>
        <div className={styles.movie_name}>{movie.name}</div>
        <div className={styles.movie_genre}>Genres: {movie.genres.join(', ')}</div>
      </div>
    </Link>
  );
};
