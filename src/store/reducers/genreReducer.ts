import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IGenre} from '../../types/IGenre';
import {fetchGenres} from '../actionCreators/genreActionCreator';

interface IGenreState {
  genres: IGenre[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: IGenreState = {
  genres: [],
  isLoading: false,
  isError: false,
  error: ''
};

const genreSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending.type, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchGenres.fulfilled.type, (state, action: PayloadAction<IGenre[]>) => {
      state.isLoading = false;
      state.genres = action.payload;
    });

    builder.addCase(fetchGenres.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  }
});

export const genreReducer = genreSlice.reducer;
