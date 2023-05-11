import {FC, useState, memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {IMovie} from '../../types/IMovie';
import {MovieSearchInput} from './MovieSearchInput';
import styles from './MovieSearch.module.scss';
import {MovieSearchResult} from './MovieSearchResult';
import {MovieService} from '../../services/MovieService';
import {useDebounce} from '../../hooks/useDebounce';

export const MovieSearchContainer: FC = memo(() => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);

  const searchMovies = async (query: string) => {
    try {
      if (query.length) {
        const movies = await MovieService.searchByName(query);

        setSearchResults(movies);
      } else {
        setSearchResults([]);
      }
    } catch (e) {
      setSearchResults([]);
    }
  };

  const debouncedSearch = useDebounce(searchMovies, 300);

  const changeSearchQuery = (value: string) => {
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const resetSearchQueryAndSearchResult = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const goToMovie = (movie: IMovie) => {
    resetSearchQueryAndSearchResult();
    navigate(`/${movie.slug}`);
  };

  return (
    <div className={styles.search}>
      <MovieSearchInput value={searchQuery} onChange={changeSearchQuery} onReset={resetSearchQueryAndSearchResult} />
      {!!searchResults.length && <MovieSearchResult movies={searchResults} goToMovie={goToMovie} />}
    </div>
  );
});
