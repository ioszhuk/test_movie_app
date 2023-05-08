import {RootState} from '../store';

export const getMovieStateIsLoading = (state: RootState) => state.movies.isLoading;
export const getMovieStateIsError = (state: RootState) => state.movies.isError;
export const getMovieStateError = (state: RootState) => state.movies.error;

export const getMovieStateAllMovies = (state: RootState) => state.movies.movies;
export const getMovieStateCurrentMovie = (state: RootState) => state.movies.currentMovie;

export const getMovieStateFilter = (state: RootState) => state.movies.filter;
export const getMovieStateSortOrder = (state: RootState) => state.movies.sortOrder;
