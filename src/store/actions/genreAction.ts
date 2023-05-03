import axios from 'axios';
import {AppDispatch} from '../store';
import {IGenre} from '../../models/IGenre';
import {genresFetchingRequest, genresFetchingSuccess, genresFetchingError} from '../reducers/genreReducer';

export const fetchGenres = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(genresFetchingRequest());
    const response = await axios.get<IGenre[]>(`${process.env.REACT_APP_API_BASE_URL}/genres`);

    if (response.status !== axios.HttpStatusCode.Ok) {
      throw new Error('Could not fetch movies data');
    }

    dispatch(genresFetchingSuccess(response.data));

  } catch (e: any) {
    dispatch(genresFetchingError(e.message));
  }
};
