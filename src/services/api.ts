import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {constants} from '../constants';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({baseUrl: constants.app.baseUrl}),
  endpoints: (builder) => ({
    // Получение списка всех фильмов
    getAllMovies: builder.query({
      query: () => '/movies'
    }),
    // Получение одного фильма по id
    getMovieById: builder.query({
      query: (id) => `/movies/${id}`
    })
  })
});

export const {useGetAllMoviesQuery, useGetMovieByIdQuery} = moviesApi;
