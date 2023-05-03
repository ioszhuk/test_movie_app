import {FC, useEffect} from 'react';
import {initTE, Select} from 'tw-elements';
import styles from './MovieFilter.module.scss';
import {IGenre} from '../../models/IGenre';

interface IFilterSelectList {
  genres: IGenre[];
}

export const MovieGenreFilter: FC<IFilterSelectList> = ({genres}) => {
  useEffect(() => {
    initTE({Select});
  }, []);

  if (!genres.length) {
    return null;
  }

  return (
    <div className={styles.filter}>
      <select
        data-te-select-init=""
        data-te-select-all={false}
        multiple
        data-te-select-displayed-labels="1"
        data-te-select-options-selected-label="selected"
      >
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      <label data-te-select-label-ref="">Filter by genre</label>
    </div>
  );
};
