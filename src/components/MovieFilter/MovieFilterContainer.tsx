import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import * as genreState from '../../store/reducers/genreReducer';
import {fetchGenres} from '../../store/actions/genreAction';
import {Loading} from '../Loading/Loading';
import {MovieGenreFilter} from './MovieGenreFilter';
import {getMovieStateFilter, setMoviesFilter} from '../../store/reducers/movieReducer';

export const MovieFilterContainer: FC = () => {
  const isLoading = useAppSelector(genreState.getGenreStateIsLoading);
  const genres = useAppSelector(genreState.getGenreStateAllGenres);
  const activeFilterItems = useAppSelector(getMovieStateFilter);
  const isError = useAppSelector(genreState.getGenreStateIsError);
  const error = useAppSelector(genreState.getGenreStateError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  function changeActiveItems(values: string[]) {
    dispatch(setMoviesFilter(values));
  }

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      <MovieGenreFilter genres={genres} activeItems={activeFilterItems} changeActiveItems={changeActiveItems} />
    </Loading>
  );
};
