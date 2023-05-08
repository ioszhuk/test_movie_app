import {useState, memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {IMovie} from '../../models/IMovie';
import {MovieSearchInput} from './MovieSearchInput';
import styles from './MovieSearch.module.scss';
import {MovieSearchResult} from './MovieSearchResult';
import {MovieService} from '../../services/MovieService';
import {useDebounce} from '../../hooks/useDebounce';

export const MovieSearchContainer = memo(() => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);

  const searchMovies = async (query: string) => {
    try {
      if (query.length) {
        const movieService = new MovieService();

        const movies = await movieService.search(query);

        setSearchResults(movies);
      } else {
        setSearchResults([]);
      }
    } catch (e: any) {
      setSearchResults([]);
    }
  };

  const debouncedSearch = useDebounce(searchMovies, 300);

  const changeSearchQuery = (value: string) => {
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const onReset = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const navigateToMovie = (movie: IMovie) => {
    onReset();
    navigate(`/${movie.slug}`);
  };

  return (
    <div className={styles.search}>
      <MovieSearchInput value={searchQuery} onChange={changeSearchQuery} onReset={onReset} />
      {!!searchResults.length && <MovieSearchResult movies={searchResults} navigateToMovie={navigateToMovie} />}
    </div>
  );
});
