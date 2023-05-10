import {FC, useEffect, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {fetchGenres} from '../../store/actionCreators/genreActionCreator';
import {Loading} from '../UI/Loading/Loading';
import {MovieFilter} from './MovieFilter';
import {setMoviesFilter} from '../../store/reducers/movieReducer';
import {
  selectGenresIsLoading,
  selectGenresError,
  selectGenres,
  selectGenresIsError
} from '../../store/selectors/genreSelector';
import {selectMoviesFilter} from '../../store/selectors/movieSelector';

export const MovieFilterContainer: FC = memo(() => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectGenresIsLoading);
  const genres = useAppSelector(selectGenres);
  const isError = useAppSelector(selectGenresIsError);
  const error = useAppSelector(selectGenresError);

  const activeMoviesFilterItems = useAppSelector(selectMoviesFilter);

  useEffect(() => {
    if (!genres.length) {
      dispatch(fetchGenres());
    }
  }, [genres, dispatch]);

  const onChange = (values: string[]) => dispatch(setMoviesFilter(values));

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      <MovieFilter genres={genres} activeItems={activeMoviesFilterItems} onChange={onChange} />
    </Loading>
  );
});
