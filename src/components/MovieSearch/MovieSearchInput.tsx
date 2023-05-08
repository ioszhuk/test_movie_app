import {FC, memo} from 'react';
import {SearchIcon} from '../icons/SearchIcon';
import {CrossIcon} from '../icons/CrossIcon';
import styles from './MovieSearch.module.scss';

interface MovieSearchProps {
  value: string;

  onChange(value: string): void;

  onReset(): void;
}

export const MovieSearchInput: FC<MovieSearchProps> = memo(({value, onChange, onReset}) => {
  return (
    <div>
      <label htmlFor="search-movie-input" className={styles.loupe}>
        <SearchIcon />
      </label>
      <input
        id="search-movie-input"
        type="text"
        value={value}
        placeholder="Find a movie"
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
      />
      {!!value && (
        <label htmlFor="search-movie-input" className={styles.cross} onClick={onReset}>
          <CrossIcon />
        </label>
      )}
    </div>
  );
});
