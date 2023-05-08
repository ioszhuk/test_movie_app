import {FC, useEffect, memo} from 'react';
import {initTE, Select} from 'tw-elements';
import styles from './MovieSort.module.scss';
import {ISort} from '../../models/ISort';
import {IMovieSort} from '../../models/IMovieSort';

export const MovieSort: FC<IMovieSort> = memo(({items, activeItem, onChange}) => {
  useEffect(() => {
    initTE({Select});
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.sort}>
      <select data-te-select-init="" value={activeItem} onChange={(e) => onChange(e.target.value)}>
        {items.map((item: ISort) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <label data-te-select-label-ref="">Sort</label>
    </div>
  );
});
