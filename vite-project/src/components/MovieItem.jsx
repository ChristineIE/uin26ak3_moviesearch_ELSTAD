export default function MovieItem({ movie }) {
  return (
    <li key={movie.imdbID}>
      {/* Konferert med ChatGPT for å verifisere map og hva som blir riktig key */}
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      {movie.Poster !== "N/A" ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <p>Bilde ikke tilgjengelig</p>
      )}
    </li>
  );
}
