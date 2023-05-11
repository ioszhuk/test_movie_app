import {FC, useEffect, memo} from 'react';
import {initTE, Select} from 'tw-elements';
import {IMovieSortOrder} from '../../types/IMovieSortOrder';
import styles from './MovieSort.module.scss';

interface IMovieSortProps {
  items: IMovieSortOrder[];
  activeItem: string;
  onChange: (value: string) => void;
}

export const MovieSort: FC<IMovieSortProps> = memo(({items, activeItem, onChange}) => {
  useEffect(() => {
    initTE({Select});
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.sort}>
      <select data-te-select-init="" value={activeItem} onChange={(e) => onChange(e.target.value)}>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <label data-te-select-label-ref="">Sort</label>
    </div>
  );
});
