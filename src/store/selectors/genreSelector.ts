import {RootState} from '../store';

export const selectGenresIsLoading = (state: RootState) => state.genres.isLoading;
export const selectGenresIsError = (state: RootState) => state.genres.isError;
export const selectGenresError = (state: RootState) => state.genres.error;

export const selectGenres = (state: RootState) => state.genres.genres;
