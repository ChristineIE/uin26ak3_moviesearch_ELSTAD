import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  return (
    <li key={movie.imdbID} className="movieItem">
      {/* Konferert med ChatGPT for å verifisere hva som blir riktig key */}
      <Link to={`/${movie.imdbID}`}>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
          alt={movie.Title}
          onError={(e) => {
            e.target.src = "/no-poster.png";
          }}
        />
      </Link>
      {/* Lest om Link og React Router Dom her: https://www.w3schools.com/react/react_router.asp, også konferert med ChatGPT */}
    </li>
  );
}
