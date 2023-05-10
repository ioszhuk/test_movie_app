import React, {memo, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {MovieDetailView} from '../components/MovieDetailView/MovieDetailView';
import {Loading} from '../components/UI/Loading/Loading';
import {NotFound} from '../components/NotFound/NotFound';
import {selectMovies} from '../store/selectors/movieSelector';
import {IMovie} from '../types/IMovie';

type ParamsType = {
  slug: string;
};

const MovieDetailPage = memo(() => {
  const {slug} = useParams<ParamsType>();

  const dispatch = useAppDispatch();

  const movies = useAppSelector(selectMovies);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentMovie, setCurrentMovie] = useState<IMovie>();
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // useEffect(() => {
  //   if (!isHasMovies) {
  //     dispatch(fetchMovies());
  //   } else {
  //     setCurrentMovie(movies.find((movie) => movie.slug === slug));
  //   }
  // }, [slug, movies, isHasMovies, dispatch]);

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      {currentMovie ? <MovieDetailView movie={currentMovie} /> : <NotFound message="Movie not found" />}
    </Loading>
  );
});

export default MovieDetailPage;
