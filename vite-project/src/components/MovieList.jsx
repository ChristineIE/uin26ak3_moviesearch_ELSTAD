import MovieItem from "../components/MovieItem";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} /> //Konferert med ChatGPT for å verifisere hva som blir riktig key: https://chatgpt.com/share/69b6bcbf-6060-8006-9f84-cd5c234d02f4
      ))}
    </ul>
  );
}
