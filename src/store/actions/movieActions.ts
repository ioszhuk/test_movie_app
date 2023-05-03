import axios from 'axios';
import {AppDispatch} from '../store';
import {
  moviesFetchingRequest,
  moviesFetchingError,
  moviesFetchingSuccess,
  currentMovieFetchingSuccess
} from '../reducers/movieReducer';
import {MovieService} from '../../services/movieService';

export const fetchMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(moviesFetchingRequest());

    const movieService = new MovieService();

    const response = await movieService.getAll();

    if (response.status !== axios.HttpStatusCode.Ok) {
      throw new Error('Could not fetch movies data');
    }

    dispatch(moviesFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(moviesFetchingError(e.message));
  }
};

export const fetchMovie = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(moviesFetchingRequest());

    const movieService = new MovieService();

    const response = await movieService.getOne(slug);

    if (response.status !== axios.HttpStatusCode.Ok) {
      throw new Error('Could not fetch movie data');
    }

    dispatch(currentMovieFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(moviesFetchingError(e.message));
  }
};
