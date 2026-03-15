import MovieItem from "../components/MovieItem";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
