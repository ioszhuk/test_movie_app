export interface ISort {
  id: string;
  name: string;
}

export enum MovieSort {
  NAME = 'name',
  RATING = 'rating',
}

export const sortDefaultItems: ISort[] = [
  {id: MovieSort.NAME, name: 'By Name'},
  {id: MovieSort.RATING, name: 'By Rating'}
];
