import {FC, useEffect, memo} from 'react';
import {initTE, Select} from 'tw-elements';
import {IGenre} from '../../types/IGenre';
import styles from './MovieFilter.module.scss';

interface IFilterSelectListProps {
  genres: IGenre[];
  activeItems: string[];
  onChange: (values: string[]) => void;
}

export const MovieFilter: FC<IFilterSelectListProps> = memo(({genres, activeItems, onChange}) => {
  useEffect(() => {
    initTE({Select});
  }, []);

  function onChangeSelect(targetId: string): void {
    const selectElement = document.querySelector(`#${targetId}`);
    const selectInstance = Select.getInstance(selectElement);
    onChange(selectInstance.value);
  }

  if (!genres.length) {
    return null;
  }

  return (
    <div className={styles.filter}>
      <select
        data-te-select-init=""
        data-te-select-all={false}
        multiple
        id="js-movie-genre-filter"
        data-te-select-displayed-labels="1"
        data-te-select-options-selected-label="selected"
        onChange={(e) => onChangeSelect(e.target.id)}
        value={activeItems}
      >
        {genres.map((genre: IGenre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      <label data-te-select-label-ref="">Filter by genre</label>
    </div>
  );
});
