import {RootState} from '../store';

export const getGenreStateIsLoading = (state: RootState) => state.genres.isLoading;
export const getGenreStateIsError = (state: RootState) => state.genres.isError;
export const getGenreStateError = (state: RootState) => state.genres.error;

export const getGenreStateAllGenres = (state: RootState) => state.genres.genres;
