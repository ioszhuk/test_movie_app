import React, {memo, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import * as movieSelector from '../store/selectors/movieSelector';
import {MovieDetailView} from '../components/MovieDetailView/MovieDetailView';
import {fetchMovie} from '../store/actions/movieActions';
import {Loading} from '../components/Loading/Loading';
import {NotFound} from '../components/NotFound/NotFound';

type ParamsType = {
  slug: string;
};

const MovieDetailPage = memo(() => {
  const isLoading = useAppSelector(movieSelector.getMovieStateIsLoading);
  const currentMovie = useAppSelector(movieSelector.getMovieStateCurrentMovie);
  const isError = useAppSelector(movieSelector.getMovieStateIsError);
  const error = useAppSelector(movieSelector.getMovieStateError);

  const dispatch = useAppDispatch();

  const {slug} = useParams<ParamsType>();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMovie(slug));
  }, [slug, dispatch]);

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      {currentMovie ? <MovieDetailView movie={currentMovie} /> : <NotFound message="Not found movie" />}
    </Loading>
  );
});

export default MovieDetailPage;
