import {FC, memo} from 'react';
import {SearchIcon} from '../icons/SearchIcon';
import {CrossIcon} from '../icons/CrossIcon';
import styles from './MovieSearch.module.scss';

interface MovieSearchProps {
  searchValue: string;
  changeSearchValue: any;
  clearSearchValue: any;
}

export const MovieSearchInput: FC<MovieSearchProps> = memo(
  ({searchValue, changeSearchValue, clearSearchValue}) => {
    return (
      <div>
        <label htmlFor="search-movie-input" className={styles.loupe}>
          <SearchIcon />
        </label>
        <input
          id="search-movie-input"
          type="text"
          value={searchValue}
          placeholder="Find a movie"
          autoComplete="off"
          onChange={(e) => changeSearchValue(e.target.value)}
        />
        {!!searchValue && (
          <label htmlFor="search-movie-input" className={styles.cross} onClick={clearSearchValue}>
            <CrossIcon />
          </label>
        )}
      </div>
    );
  }
);
