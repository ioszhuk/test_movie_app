import {AppDispatch} from '../store';
import {genresFetchingRequest, genresFetchingSuccess, genresFetchingError} from '../reducers/genreReducer';
import {GenreService} from '../../services/GenreService';

export const fetchGenres = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(genresFetchingRequest());

    const genreService = new GenreService();

    const genres = await genreService.getAll();

    dispatch(genresFetchingSuccess(genres));
  } catch (e: any) {
    dispatch(genresFetchingError('Could not fetch genres data'));
  }
};
