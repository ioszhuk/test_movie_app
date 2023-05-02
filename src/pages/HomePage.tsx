import {MovieList} from '../components/MovieList/MovieList';
import {MovieControl} from '../components/MovieControl/MovieControl';

export default function HomePage() {
  return (
    <>
      <MovieControl />
      <MovieList />
    </>
  );
}
