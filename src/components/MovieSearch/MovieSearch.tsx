import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {IMovie} from '../../models/IMovie';
import {SearchIcon} from '../icons/SearchIcon';
import {CrossIcon} from '../icons/CrossIcon';
import styles from './MovieSearch.module.scss';

interface MovieSearchProps {
  searchValue: string;
  searchResult: IMovie[];
  changeSearchValue: any;
  clearSearchValue: any;
}

export const MovieSearch: FC<MovieSearchProps> = ({searchValue, searchResult, changeSearchValue, clearSearchValue}) => (
  <div className={styles.search}>
    <label htmlFor="search-movie-input" className={styles.loupe}>
      <SearchIcon />
    </label>
    <input
      id="search-movie-input"
      type="text"
      value={searchValue}
      placeholder="Find a movie"
      onChange={(e) => changeSearchValue(e.target.value)}
    />
    {!!searchValue && (
      <label htmlFor="search-movie-input" className={styles.cross} onClick={clearSearchValue}>
        <CrossIcon />
      </label>
    )}
    {!!searchResult.length && <MovieSearchList movies={searchResult} clearSearchValue={clearSearchValue} />}
  </div>
);

interface MovieSearchListProps {
  movies: IMovie[];
  clearSearchValue: any;
}

const MovieSearchList: FC<MovieSearchListProps> = ({movies, clearSearchValue}) => {
  const navigate = useNavigate();

  function navigateToMoviePage(movie: IMovie) {
    clearSearchValue();
    navigate(`/${movie.slug}`);
  }

  return (
    <ul className={styles.found_movie_list}>
      {movies.map((movie: IMovie) => (
        <li key={movie.id} onClick={() => navigateToMoviePage(movie)}>
          <figure>
            <img src={movie.img} alt={movie.name} />
          </figure>
          <span>{movie.name}</span>
        </li>
      ))}
    </ul>
  );
};
