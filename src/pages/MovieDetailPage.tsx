import React, {memo, useState, useEffect, useCallback} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {MovieDetailView} from '../components/MovieDetailView/MovieDetailView';
import {Loading} from '../components/UI/Loading/Loading';
import {selectMovies} from '../store/selectors/movieSelector';
import {IMovie} from '../types/IMovie';
import {MovieService} from '../services/MovieService';

type ParamsType = {
  slug: string;
};

const MovieDetailPage = memo(() => {
  const navigate = useNavigate();

  const {slug} = useParams<ParamsType>();

  const dispatch = useAppDispatch();

  const movies = useAppSelector(selectMovies);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentMovie, setCurrentMovie] = useState<IMovie>();
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchMovie = useCallback(
    async (slug: string) => {
      try {
        setIsLoading(true);
        const movie = await MovieService.getOne(slug);

        if (movie) {
          setCurrentMovie(movie);
        } else {
          navigate('/');
        }
      } catch (e: any) {
        setIsError(true);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate]
  );

  const findMovieBySlug = useCallback(
    (slug: string) => {
      if (movies.length) {
        const movie = movies.find((movie) => movie.slug === slug);
        if (movie) {
          setCurrentMovie(movie);
        } else {
          fetchMovie(slug);
        }
      } else {
        fetchMovie(slug);
      }
    },
    [fetchMovie, movies]
  );

  useEffect(() => {
    findMovieBySlug(`${slug}`);
  }, [dispatch, findMovieBySlug, movies, slug]);

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      {currentMovie ? <MovieDetailView movie={currentMovie} /> : ''}
    </Loading>
  );
});

export default MovieDetailPage;
