import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {IMovie} from '../../models/IMovie';
import {MovieSort} from '../../models/ISort';

interface MovieState {
  movies: IMovie[];
  currentMovie: IMovie | null;
  filter: string[];
  sortOrder: string;
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: MovieState = {
  movies: [],
  currentMovie: null,
  filter: [],
  sortOrder: MovieSort.NAME,
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
    currentMovieFetchingSuccess(state, action: PayloadAction<IMovie>) {
      state.isLoading = false;
      state.isError = false;
      state.error = '';
      state.currentMovie = action.payload;
    },
    setMoviesFilter(state, action: PayloadAction<string[]>) {
      state.filter = action.payload;
    },
    setMoviesSortOrder(state, action: PayloadAction<string>) {
      state.sortOrder = action.payload;
    },
    moviesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    }
  }
});

export const {
  moviesFetchingRequest,
  moviesFetchingSuccess,
  currentMovieFetchingSuccess,
  setMoviesFilter,
  setMoviesSortOrder,
  moviesFetchingError
} = movieSlice.actions;

export const getMovieStateIsLoading = (state: RootState) => state.movies.isLoading;
export const getMovieStateIsError = (state: RootState) => state.movies.isError;
export const getMovieStateError = (state: RootState) => state.movies.error;

export const getMovieStateAllMovies = (state: RootState) => state.movies.movies;
export const getMovieStateCurrentMovie = (state: RootState) => state.movies.currentMovie;

export const getMovieStateFilter = (state: RootState) => state.movies.filter;
export const getMovieStateSortOrder = (state: RootState) => state.movies.sortOrder;

export const movieReducer = movieSlice.reducer;
