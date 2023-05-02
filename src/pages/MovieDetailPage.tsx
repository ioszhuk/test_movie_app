import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {from} from 'rxjs';
import {filter} from 'rxjs/operators';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import * as movieState from '../store/reducers/movieReducer';
import {IMovie} from '../models/IMovie';
import {MovieDetailView} from '../components/MovieDetailView/MovieDetailView';
import {fetchMovies} from '../store/actions/movieActions';
import {Loading} from '../components/Loading/Loading';
import {Header} from '../components/Header/Header';
import {NotFound} from '../components/NotFound/NotFound';

export default function MovieDetailPage() {
  const isLoading = useAppSelector(movieState.getMovieStateIsLoading);
  const movies = useAppSelector(movieState.getMovieStateAllMovies);
  const isError = useAppSelector(movieState.getMovieStateIsError);
  const error = useAppSelector(movieState.getMovieStateError);

  const [currentMovie, setCurrentMovie] = useState();

  const dispatch = useAppDispatch();

  // @ts-ignore
  const {slug}: string = useParams();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movies) {
      fetchMovie(slug);
    }
  }, [slug, movies]);

  function fetchMovie(slug: string): void {
    const source = from(movies);

    source.pipe(filter((movie: any) => movie.slug === slug)).subscribe((movie: any) => setCurrentMovie(movie));
  }

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      {currentMovie ? <MovieDetailView movie={currentMovie} /> : <NotFound message="Not found movie" />}
    </Loading>
  );
}
