import {useMemo} from 'react';
import {IMovie} from '../models/IMovie';
import {MovieSort} from '../enums/MovieSort';

const useMovieFilter = (movies: IMovie[], movieFilter: string[]): IMovie[] => {
  return useMemo(() => {
    if (!movieFilter.length) {
      return movies;
    }

    return movies.filter((movie: IMovie) => {
      let isMovieHasGenre: boolean = false;

      movie.genres.forEach((genre) => {
        if (movieFilter.includes(genre)) {
          isMovieHasGenre = true;
        }
      });

      return isMovieHasGenre;
    });
  }, [movies, movieFilter]);
};

const useMovieSort = (movies: IMovie[], movieSortOrder: string): IMovie[] => {
  return useMemo(() => {
    if (movieSortOrder === MovieSort.NAME) {
      return [...movies].sort(function (objectA, objectB) {
        if (objectA.name < objectB.name) {
          return -1;
        }

        if (objectA.name > objectB.name) {
          return 1;
        }

        return 0;
      });
    } else if (movieSortOrder === MovieSort.RATING) {
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
  }, [movies, movieSortOrder]);
};

export const useMovies = (movies: IMovie[], movieFilter: string[], movieSortOrder: string): IMovie[] => {
  const filteredMovies = useMovieFilter(movies, movieFilter);
  return useMovieSort(filteredMovies, movieSortOrder);
};
