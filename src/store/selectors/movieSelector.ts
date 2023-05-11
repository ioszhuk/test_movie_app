import {RootState} from '../store';
import {createSelector} from '@reduxjs/toolkit';
import {IMovie} from '../../types/IMovie';
import {MovieSortOrderType} from '../../enums/MovieSortOrderType';

export const selectMoviesIsLoading = (state: RootState) => state.movies.isLoading;
export const selectMoviesIsError = (state: RootState) => state.movies.isError;
export const selectMoviesError = (state: RootState) => state.movies.error;

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectMoviesFilter = (state: RootState) => state.movies.filter;
export const selectMoviesSortOrder = (state: RootState) => state.movies.sortOrder;

export const selectFilteredMovies = createSelector([selectMovies, selectMoviesFilter], (movies, moviesFilter) => {
  if (!moviesFilter.length) {
    return movies;
  }

  return movies.filter((movie: IMovie) => {
    let isMovieHasGenre: boolean = false;

    movie.genres.forEach((genre) => {
      if (moviesFilter.includes(genre)) {
        isMovieHasGenre = true;
      }
    });

    return isMovieHasGenre;
  });
});

export const selectSortedMovies = createSelector(
  [selectFilteredMovies, selectMoviesSortOrder],
  (movies, moviesSortOrder) => {
    if (moviesSortOrder === MovieSortOrderType.NAME) {
      return [...movies].sort(function (objectA, objectB) {
        if (objectA.name < objectB.name) {
          return -1;
        }

        if (objectA.name > objectB.name) {
          return 1;
        }

        return 0;
      });
    } else if (moviesSortOrder === MovieSortOrderType.RATING) {
      return [...movies].sort(function (objectA, objectB) {
        if (objectA.rate < objectB.rate) {
          return 1;
        }

        if (objectA.rate > objectB.rate) {
          return -1;
        }

        return 0;
      });
    }

    return movies;
  }
);

export const selectFilteredAndSortedMovies = createSelector([selectSortedMovies], (movies) => movies);
