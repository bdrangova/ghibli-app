import { getAllMovies, getMovieById } from './ghibli-api';
import { getImdbMovie } from './imdb-api';

async function getPoster(movie) {
  const name = movie.title.replace(' ', '+');
  return getImdbMovie(name).then(response => {
    const poster = response.Poster;
    return { ...movie, poster };
  });
}

async function fetchMovies(movie_id = '') {
  const movies =
    movie_id === '' ? await getAllMovies() : [await getMovieById(movie_id)];
  return await Promise.all(
    movies.map(item => getPoster(item).then(response => response)),
  );
}

export default fetchMovies;
