import {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import * as movieState from '../../store/reducers/movieReducer';
import {fetchMovies} from '../../store/actions/movieActions';
import {Loading} from '../Loading/Loading';
import {MovieList} from './MovieList';
import {IMovie} from '../../models/IMovie';
import {MovieSort} from '../../models/ISort';

export const MovieListContainer = () => {
  const isLoading = useAppSelector(movieState.getMovieStateIsLoading);
  const movies = useAppSelector(movieState.getMovieStateAllMovies);
  const movieFilter = useAppSelector(movieState.getMovieStateFilter);
  const movieSortOrder = useAppSelector(movieState.getMovieStateSortOrder);
  const isError = useAppSelector(movieState.getMovieStateIsError);
  const error = useAppSelector(movieState.getMovieStateError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = useMemo(() => {
    return getFilteredMovies();
  }, [movieFilter, movies, getFilteredMovies]);

  const sortMovies = useMemo(() => {
    return getSortedMovies();
  }, [movieSortOrder, movieFilter, movies, getSortedMovies]);

  function getFilteredMovies(): IMovie[] {
    if (!movieFilter.length) {
      return movies;
    }

    return movies.filter((movie) => {
      let isMovieHasGenre: boolean = false;

      movie.genres.forEach((genre) => {
        if (movieFilter.includes(genre)) {
          isMovieHasGenre = true;
        }
      });

      return isMovieHasGenre;
    });
  }

  function getSortedMovies(): IMovie[] {

    if (movieSortOrder === MovieSort.NAME) {
      return [...filteredMovies].sort(function (objectA, objectB) {
        if (objectA.name < objectB.name) {
          return -1;
        }

        if (objectA.name > objectB.name) {
          return 1;
        }

        return 0;
      });
    } else if (movieSortOrder === MovieSort.RATING) {
      return [...filteredMovies].sort(function (objectA, objectB) {
        if (objectA.rate < objectB.rate) {
          return 1;
        }

        if (objectA.rate > objectB.rate) {
          return -1;
        }

        return 0;
      });
    }

    return filteredMovies;
  }

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      <MovieList movies={sortMovies} />
    </Loading>
  );
};
