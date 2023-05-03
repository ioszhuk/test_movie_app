import {useEffect, useState} from 'react';
import {from} from 'rxjs';
import {filter, scan} from 'rxjs/operators';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getMovieStateAllMovies} from '../../store/reducers/movieReducer';
import {IMovie} from '../../models/IMovie';
import {fetchMovies} from '../../store/actions/movieActions';
import {MovieSearch} from './MovieSearch';

export const MovieSearchContainer = () => {
  const movies = useAppSelector(getMovieStateAllMovies);

  const [searchValue, setSearchValue] = useState<string>('');

  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchValue.length !== 0 && movies.length === 0) {
      dispatch(fetchMovies());
    }

    findMovies();
  }, [searchValue]);

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

  return (
    <MovieSearch
      searchValue={searchValue}
      searchResult={searchResult}
      changeSearchValue={changeSearchValue}
      clearSearchValue={clearSearchValue}
    />
  );
};
