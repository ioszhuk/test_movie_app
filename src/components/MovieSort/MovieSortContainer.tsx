import {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {MovieSort} from './MovieSort';
import {ISort, sortDefaultItems} from '../../models/ISort';
import {getMovieStateSortOrder, setMoviesSortOrder} from '../../store/reducers/movieReducer';

export const MovieSortContainer: FC = () => {
  const [items, setItems] = useState<ISort[]>([]);

  const activeSortItem = useAppSelector(getMovieStateSortOrder);

  const dispatch = useAppDispatch();

  function initSortItems() {
    setItems(sortDefaultItems);
  }

  function changeActiveItem(value: string) {
    dispatch(setMoviesSortOrder(value));
  }

  useEffect(() => {
    initSortItems();
  }, [dispatch]);

  return <MovieSort items={items} activeItem={activeSortItem} changeActiveItem={changeActiveItem} />;
};
