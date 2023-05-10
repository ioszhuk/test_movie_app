import {FC, memo} from 'react';
import {SearchIcon} from '../UI/icons/SearchIcon';
import {CrossIcon} from '../UI/icons/CrossIcon';
import styles from './MovieSearch.module.scss';

interface IMovieSearchProps {
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
}

export const MovieSearchInput: FC<IMovieSearchProps> = memo(({value, onChange, onReset}) => (
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
));
