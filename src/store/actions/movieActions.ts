import {AppDispatch} from '../store';
import {
  moviesFetchingRequest,
  moviesFetchingError,
  moviesFetchingSuccess,
  currentMovieFetchingSuccess
} from '../reducers/movieReducer';
import {MovieService} from '../../services/MovieService';

export const fetchMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(moviesFetchingRequest());

    const movieService = new MovieService();

    const movies = await movieService.getAll();

    dispatch(moviesFetchingSuccess(movies));
  } catch (e: any) {
    dispatch(moviesFetchingError('Could not fetch movies data'));
  }
};

export const fetchMovie = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(moviesFetchingRequest());

    const movieService = new MovieService();

    const movie = await movieService.getOne(slug);

    dispatch(currentMovieFetchingSuccess(movie));
  } catch (e: any) {
    dispatch(moviesFetchingError('Could not fetch movie data'));
  }
};
