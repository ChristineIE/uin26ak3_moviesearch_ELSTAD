import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  return (
    <li key={movie.imdbID} className="movieItemLi">
      {/* Konferert med ChatGPT for å verifisere hva som blir riktig key */}
      <Link to={`/${movie.imdbID}`}>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <p>Bilde ikke tilgjengelig</p>
        )}
      </Link>
      {/* Lest om Link og React Router Dom her: https://www.w3schools.com/react/react_router.asp, også konferert med ChatGPT */}
    </li>
  );
}
