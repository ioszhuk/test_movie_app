import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {IMovie} from '../../models/IMovie';

interface MovieState {
  movies: IMovie[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  isError: false,
  error: ''
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    moviesFetchingRequest(state) {
      state.isLoading = true;
    },
    moviesFetchingSuccess(state, action: PayloadAction<IMovie[]>) {
      state.isLoading = false;
      state.isError = false;
      state.error = '';
      state.movies = action.payload;
    },
    moviesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    }
  }
});

export const {moviesFetchingRequest, moviesFetchingSuccess, moviesFetchingError} = movieSlice.actions;

export const getMovieStateIsLoading = (state: RootState) => state.movies.isLoading;
export const getMovieStateAllMovies = (state: RootState) => state.movies.movies;
export const getMovieStateIsError = (state: RootState) => state.movies.isError;
export const getMovieStateError = (state: RootState) => state.movies.error;

export const movieReducer = movieSlice.reducer;
