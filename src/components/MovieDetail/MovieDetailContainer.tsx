import React, {memo, useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {selectMovies} from '../../store/selectors/movieSelector';
import {IMovie} from '../../types/IMovie';
import {MovieService} from '../../services/MovieService';
import {Loading} from '../UI/Loading/Loading';
import {MovieDetail} from './MovieDetail';

type ParamsType = {
  slug: string;
};

export const MovieDetailContainer = memo(() => {
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
      const movie = movies.find((movie) => movie.slug === slug);
      if (movie) {
        setCurrentMovie(movie);
      } else {
        fetchMovie(slug);
      }
    },
    [fetchMovie, movies]
  );

  useEffect(() => {
    // @ts-ignore
    findMovieBySlug(slug);
  }, [dispatch, findMovieBySlug, slug]);

  return (
    <Loading isLoading={isLoading} isError={isError} error={error}>
      {currentMovie ? <MovieDetail movie={currentMovie} /> : ''}
    </Loading>
  );
});
