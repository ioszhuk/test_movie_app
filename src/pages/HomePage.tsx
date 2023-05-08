import {memo} from 'react';
import {MovieControl} from '../components/MovieControl/MovieControl';
import {MovieListContainer} from '../components/MovieList/MovieListContainer';

const HomePage = memo(() => {
  return (
    <>
      <MovieControl />
      <MovieListContainer />
    </>
  );
});

export default HomePage;
