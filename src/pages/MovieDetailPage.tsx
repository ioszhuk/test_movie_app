import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import * as movieState from '../store/reducers/movieReducer';
import {MovieDetailView} from '../components/MovieDetailView/MovieDetailView';
import {fetchMovie} from '../store/actions/movieActions';
import {Loading} from '../components/Loading/Loading';
import {NotFound} from '../components/NotFound/NotFound';

type ParamsType = {
  slug: string;
};

export default function MovieDetailPage() {
  const isLoading = useAppSelector(movieState.getMovieStateIsLoading);
  const currentMovie = useAppSelector(movieState.getMovieStateCurrentMovie);
  const isError = useAppSelector(movieState.getMovieStateIsError);
  const error = useAppSelector(movieState.getMovieStateError);

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
}
