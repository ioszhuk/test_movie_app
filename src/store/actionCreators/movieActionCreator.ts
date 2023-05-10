import {createAsyncThunk} from '@reduxjs/toolkit';
import {MovieService} from '../../services/MovieService';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (_, thunkAPI) => {
  try {
    const movies = await MovieService.getAll();
    return movies;
  } catch (e) {
    return thunkAPI.rejectWithValue('Could not fetch movies data');
  }
});

export const fetchMovie = createAsyncThunk('movies/fetchMovie', async (slug:string, thunkAPI) => {
  try {
    const movie = await MovieService.getOne(slug);
    return movie;
  } catch (e) {
    return thunkAPI.rejectWithValue('Could not fetch movie data');
  }
});
