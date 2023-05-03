import axios from 'axios';
import {AppDispatch} from '../store';
import {genresFetchingRequest, genresFetchingSuccess, genresFetchingError} from '../reducers/genreReducer';
import {GenreService} from '../../services/genreService';

export const fetchGenres = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(genresFetchingRequest());

    const genreService = new GenreService();

    const response = await genreService.getAll();

    if (response.status !== axios.HttpStatusCode.Ok) {
      throw new Error('Could not fetch genres data');
    }

    dispatch(genresFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(genresFetchingError(e.message));
  }
};
