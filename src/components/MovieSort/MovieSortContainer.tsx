import {FC, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {MovieSortOrderType} from '../../enums/MovieSortOrderType';
import {setMoviesSortOrder} from '../../store/reducers/movieReducer';
import {IMovieSortOrder} from '../../types/IMovieSortOrder';
import {MovieSort} from './MovieSort';
import {selectMoviesSortOrder} from '../../store/selectors/movieSelector';

const defaultMovieSortList: IMovieSortOrder[] = [
  {id: MovieSortOrderType.NAME, name: 'By Name'},
  {id: MovieSortOrderType.RATING, name: 'By Rating'}
];

export const MovieSortContainer: FC = memo(() => {
  const dispatch = useAppDispatch();

  const activeMoviesSortOrderItem = useAppSelector(selectMoviesSortOrder);

  const onChange = (value: string) => dispatch(setMoviesSortOrder(value));

  return <MovieSort items={defaultMovieSortList} activeItem={activeMoviesSortOrderItem} onChange={onChange} />;
});
