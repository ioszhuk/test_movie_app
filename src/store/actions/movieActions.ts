import axios from 'axios';
import {AppDispatch} from '../store';
import {IMovie} from '../../models/IMovie';
import {moviesFetchingRequest, moviesFetchingError, moviesFetchingSuccess} from '../reducers/movieReducer';

export const fetchMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(moviesFetchingRequest());
    const response = await axios.get<IMovie[]>(`${process.env.REACT_APP_API_BASE_URL}/movies`);

    if (response.status !== axios.HttpStatusCode.Ok) {
      throw new Error('Could not fetch movies data');
    }

    setTimeout(() => {
      dispatch(moviesFetchingSuccess(response.data));
    }, 500);

  } catch (e: any) {
    dispatch(moviesFetchingError(e.message));
  }
};
