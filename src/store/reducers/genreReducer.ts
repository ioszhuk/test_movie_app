import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {IGenre} from '../../models/IGenre';

interface GenreState {
  genres: IGenre[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: GenreState = {
  genres: [],
  isLoading: false,
  isError: false,
  error: ''
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    genresFetchingRequest(state) {
      state.isLoading = true;
    },
    genresFetchingSuccess(state, action: PayloadAction<IGenre[]>) {
      state.isLoading = false;
      state.isError = false;
      state.error = '';
      state.genres = action.payload;
    },
    genresFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    }
  }
});

export const {genresFetchingRequest, genresFetchingSuccess, genresFetchingError} = genreSlice.actions;

export const getGenreStateIsLoading = (state: RootState) => state.genres.isLoading;
export const getGenreStateAllGenres = (state: RootState) => state.genres.genres;
export const getGenreStateIsError = (state: RootState) => state.genres.isError;
export const getGenreStateError = (state: RootState) => state.genres.error;

export const genreReducer = genreSlice.reducer;
