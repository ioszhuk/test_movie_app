import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from '../../types/IMovie';
import {MovieSortOrderType} from '../../enums/MovieSortOrderType';
import {fetchMovies} from '../actionCreators/movieActionCreator';

interface IMovieState {
  movies: IMovie[];
  filter: string[];
  sortOrder: string;
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: IMovieState = {
  movies: [],
  filter: [],
  sortOrder: MovieSortOrderType.NAME,
  isLoading: false,
  isError: false,
  error: ''
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMoviesFilter(state, action: PayloadAction<string[]>) {
      state.filter = action.payload;
    },
    setMoviesSortOrder(state, action: PayloadAction<string>) {
      state.sortOrder = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending.type, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMovies.fulfilled.type, (state, action: PayloadAction<IMovie[]>) => {
      state.isLoading = false;
      state.movies = action.payload;
    });

    builder.addCase(fetchMovies.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  }
});

export const {setMoviesFilter, setMoviesSortOrder} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
