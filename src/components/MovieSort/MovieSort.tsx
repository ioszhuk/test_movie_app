import {FC, useEffect} from 'react';
import {initTE, Select} from 'tw-elements';
import styles from './MovieSort.module.scss';
import {ISort} from '../../models/ISort';

interface IMovieSort {
  items: ISort[];
  activeItem: string;
  changeActiveItem: any;
}

export const MovieSort: FC<IMovieSort> = ({items, activeItem, changeActiveItem}) => {
  useEffect(() => {
    initTE({Select});
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.sort}>
      <select data-te-select-init="" value={activeItem} onChange={(e) => changeActiveItem(e.target.value)}>
        {items.map((item: ISort) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <label data-te-select-label-ref="">Sort</label>
    </div>
  );
};
