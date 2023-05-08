import {FC, useState, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {MovieSort} from './MovieSort';
import {ISort, sortDefaultItems} from '../../models/ISort';
import * as movieSelector from '../../store/selectors/movieSelector';
import {setMoviesSortOrder} from '../../store/reducers/movieReducer';

export const MovieSortContainer: FC = memo(() => {
  const [items, setItems] = useState<ISort[]>(sortDefaultItems);

  const activeSortItem = useAppSelector(movieSelector.getMovieStateSortOrder);

  const dispatch = useAppDispatch();

  function changeActiveItem(value: string) {
    dispatch(setMoviesSortOrder(value));
  }

  return <MovieSort items={items} activeItem={activeSortItem} changeActiveItem={changeActiveItem} />;
});
