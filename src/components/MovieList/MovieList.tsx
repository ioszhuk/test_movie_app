import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {clsx} from 'clsx';
import {IMovie} from '../../models/IMovie';
import {fetchMovies} from '../../store/actions/movieActions';
import {MovieListItem} from '../MovieListItem/MovieListItem';
import * as movieState from '../../store/reducers/movieReducer';
import styles from './MovieList.module.scss';
import {Loading} from '../Loading/Loading';

export const MovieList = () => {
  const isLoading = useAppSelector(movieState.getMovieStateIsLoading);
  const movies = useAppSelector(movieState.getMovieStateAllMovies);
  const isError = useAppSelector(movieState.getMovieStateIsError);
  const error = useAppSelector(movieState.getMovieStateError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      <div className={styles.list}>
        <div className={clsx('container', styles.container)}>
          <div className={styles.grid_list}>
            {movies.map((movie: IMovie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Loading>
  );
};
