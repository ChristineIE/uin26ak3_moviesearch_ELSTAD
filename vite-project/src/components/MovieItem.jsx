import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  const slug = movie.Title.toLowerCase().replaceAll(" ", "-"); //Diskutert beste løsning for slug med ChatGPT da jeg ikke så i oppgaven at slug skulle vise filtittelen, jeg hadde brukt imdbID. Endte opp med tittel og id da ID er best practice. Håper det er greit: https://chatgpt.com/share/69b7c0f1-1618-8006-bae8-189482eb6298

  return (
    <li className="movieItem">
      <Link to={`/${slug}-${movie.imdbID}`}>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
          alt={movie.Title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/no-poster.png"; //Konferert med ChatGPT om beste løsning på Placeholder-bilde ved manglende bilde/error: https://chatgpt.com/share/69b6bcbf-6060-8006-9f84-cd5c234d02f4
          }}
        />
      </Link>
      {/* Lest om Link og React Router Dom her: https://www.w3schools.com/react/react_router.asp, også konferert med ChatGPT: https://chatgpt.com/share/69b6bcbf-6060-8006-9f84-cd5c234d02f4 */}
    </li>
  );
}
