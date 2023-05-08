import {MovieSort} from '../enums/MovieSort';

export interface ISort {
  id: string;
  name: string;
}

export const movieSortDefaultList: ISort[] = [
  {id: MovieSort.NAME, name: 'By Name'},
  {id: MovieSort.RATING, name: 'By Rating'}
];
