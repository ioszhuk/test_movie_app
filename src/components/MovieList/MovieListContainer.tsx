import {useEffect, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import * as movieSelector from '../../store/selectors/movieSelector';
import {fetchMovies} from '../../store/actions/movieActions';
import {Loading} from '../Loading/Loading';
import {MovieList} from './MovieList';
import {useMovies} from '../../hooks/useMovies';

export const MovieListContainer = memo((props) => {
  const isLoading = useAppSelector(movieSelector.getMovieStateIsLoading);
  const movies = useAppSelector(movieSelector.getMovieStateAllMovies);
  const movieFilter = useAppSelector(movieSelector.getMovieStateFilter);
  const movieSortOrder = useAppSelector(movieSelector.getMovieStateSortOrder);
  const isError = useAppSelector(movieSelector.getMovieStateIsError);
  const error = useAppSelector(movieSelector.getMovieStateError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredAndSortedMovies = useMovies(movies, movieFilter, movieSortOrder);

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      <MovieList movies={filteredAndSortedMovies} />
    </Loading>
  );
});
