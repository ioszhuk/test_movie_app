import {FC, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {from} from 'rxjs';
import {filter, scan} from 'rxjs/operators';
import {useAppSelector} from '../../hooks/redux';
import styles from './MovieSearch.module.scss';
import {getMovieStateAllMovies} from '../../store/reducers/movieReducer';
import {IMovie} from '../../models/IMovie';
import {SearchIcon} from '../icons/SearchIcon';
import {CrossIcon} from '../icons/CrossIcon';

export const MovieSearch = () => {
  const movies = useAppSelector(getMovieStateAllMovies);

  const [searchValue, setSearchValue] = useState<string>('');

  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  function changeSearchValue(value: string): void {
    setSearchValue(value);
  }

  function clearSearchValue(): void {
    setSearchValue('');
  }

  function findMovies(): void {
    const source = from(movies);

    const searchPhrase = searchValue.toLowerCase().trim();

    // block searching if string shorter than 2 chars
    if (searchPhrase.length < 2) {
      setSearchResult([]);
      return;
    }

    source
      .pipe(
        filter((movie: IMovie) => movie.name.toLowerCase().includes(searchPhrase)),
        scan((acc: any, v: IMovie) => acc.concat(v), [])
      )
      .subscribe((items) => setSearchResult(items));
  }

  useEffect(() => {
    findMovies();
  }, [searchValue]);

  return (
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
      {!!searchResult.length && <FoundMovieList movies={searchResult} clearSearchValue={clearSearchValue} />}
    </div>
  );
};

const FoundMovieList: FC<{movies: IMovie[]; clearSearchValue: any}> = ({movies, clearSearchValue}) => {
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
