import {ISort} from './ISort';

export interface IMovieSort {
  items: ISort[];
  activeItem: string;

  onChange(value: string): void;
}
