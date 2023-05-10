import {createAsyncThunk} from '@reduxjs/toolkit';
import {GenreService} from '../../services/GenreService';

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async (_, thunkAPI) => {
  try {
    const genres = await GenreService.getAll();
    return genres;
  } catch (e) {
    return thunkAPI.rejectWithValue('Could not fetch genres data');
  }
});
