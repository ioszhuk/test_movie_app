import {FC, memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {clsx} from 'clsx';
import {IMovie} from '../../types/IMovie';
import styles from './MovieDetailView.module.scss';

interface IMovieDetailViewProps {
  movie: IMovie;
}

export const MovieDetailView: FC<IMovieDetailViewProps> = memo(({movie}) => {
  const navigate = useNavigate();

  const goHome = () => navigate('/');

  if (!movie) {
    return null;
  }

  return (
    <div className={styles.movie_detail}>
      <div className={clsx('container', styles.container)}>
        <button type="button" className={styles.return_button} onClick={goHome}>
          &#8592; Go To Home Page
        </button>

        <div className={styles.movie_detail_item}>
          <div className={styles.movie_detail_item__poster}>
            <img src={movie.img} alt={movie.name} />
          </div>
          <div className={styles.movie_detail_item__content}>
            <p>
              <b>Name:</b> {movie.name}
            </p>
            <p>
              <b>Rate:</b> {movie.rate}
            </p>
            <p>
              <b>Length:</b> {movie.length}
            </p>
            <p>
              <b>Genres:</b> {movie.genres.join(', ')}
            </p>
            <p>
              <b>Description:</b> {movie.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
