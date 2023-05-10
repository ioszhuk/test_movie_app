import {useEffect, FC, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {fetchMovies} from '../../store/actionCreators/movieActionCreator';
import {Loading} from '../UI/Loading/Loading';
import {MovieList} from './MovieList';
import {
  selectMoviesIsLoading,
  selectFilteredAndSortedMovies,
  selectMoviesIsError,
  selectMoviesError
} from '../../store/selectors/movieSelector';

export const MovieListContainer: FC = memo(() => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectMoviesIsLoading);
  const movies = useAppSelector(selectFilteredAndSortedMovies);
  const isError = useAppSelector(selectMoviesIsError);
  const error = useAppSelector(selectMoviesError);

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchMovies());
    }
  }, [movies, dispatch]);

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      <MovieList movies={movies} />
    </Loading>
  );
});
