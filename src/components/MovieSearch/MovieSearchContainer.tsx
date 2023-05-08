import {useEffect, useState, memo} from 'react';
import {IMovie} from '../../models/IMovie';
import {MovieSearchInput} from './MovieSearchInput';
import styles from './MovieSearch.module.scss';
import {MovieSearchResult} from './MovieSearchResult';
import {useNavigate} from 'react-router-dom';
import {MovieService} from '../../services/MovieService';

export const MovieSearchContainer = memo(() => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>('');

  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  const searchMovie = async (value: string) => {

    if (value.length) {
      const movieService = new MovieService();

      const movies = await movieService.search(value);

      setSearchResult(movies);

    } else {
      setSearchResult([]);
    }

  };

  useEffect(() => {
    searchMovie(searchValue);
  }, [searchValue]);

  const changeSearchValue = (value: string) => setSearchValue(value);

  const clearSearchValue = () => setSearchValue('');

  const goToMovie = (movie: IMovie) => {
    clearSearchValue();
    navigate(`/${movie.slug}`);
  };

  return (
    <div className={styles.search}>
      <MovieSearchInput
        searchValue={searchValue}
        changeSearchValue={changeSearchValue}
        clearSearchValue={clearSearchValue}
      />
      {!!searchResult.length && <MovieSearchResult movies={searchResult} goToMovie={goToMovie} />}
    </div>
  );
});
