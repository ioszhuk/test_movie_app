import {FC, useEffect, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import * as genreSelector from '../../store/selectors/genreSelector';
import * as movieSelector from '../../store/selectors/movieSelector';
import {fetchGenres} from '../../store/actions/genreAction';
import {Loading} from '../Loading/Loading';
import {MovieFilter} from './MovieFilter';
import {setMoviesFilter} from '../../store/reducers/movieReducer';

export const MovieFilterContainer: FC = memo(() => {
  const isLoading = useAppSelector(genreSelector.getGenreStateIsLoading);
  const genres = useAppSelector(genreSelector.getGenreStateAllGenres);
  const activeFilterItems = useAppSelector(movieSelector.getMovieStateFilter);
  const isError = useAppSelector(genreSelector.getGenreStateIsError);
  const error = useAppSelector(genreSelector.getGenreStateError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  function changeActiveItems(values: string[]) {
    dispatch(setMoviesFilter(values));
  }

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      <MovieFilter genres={genres} activeItems={activeFilterItems} changeActiveItems={changeActiveItems} />
    </Loading>
  );
});
