import {FC, useState, memo, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {MovieSort} from './MovieSort';
import {ISort, movieSortDefaultList} from '../../models/ISort';
import * as movieSelector from '../../store/selectors/movieSelector';
import {setMoviesSortOrder} from '../../store/reducers/movieReducer';

export const MovieSortContainer: FC = memo(() => {
  const [items, setItems] = useState<ISort[]>([]);

  const activeSortItem = useAppSelector(movieSelector.getMovieStateSortOrder);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setItems(movieSortDefaultList);
  }, []);

  const onChange = (value: string) => dispatch(setMoviesSortOrder(value));

  return <MovieSort items={items} activeItem={activeSortItem} onChange={onChange} />;
});
