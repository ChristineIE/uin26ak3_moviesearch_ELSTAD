import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Slet med å få dette til å funke pga. feil navn på const. Ble mye knot og "følgefeil" på grunn av det. Konfererte derfor en del med ChatGPT: https://chatgpt.com/share/69b6bcbf-6060-8006-9f84-cd5c234d02f4
export default function Movie() {
  const { movie } = useParams();
  const imdbID = movie.split("-").pop();
  const [movieData, setMovieData] = useState(null);

  const baseUrl = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(`${baseUrl}&i=${imdbID}`);
        const data = await response.json();
        setMovieData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getMovie();
  }, [imdbID]);

  if (!movieData) return <p>Laster...</p>;

  return (
    <main>
      <section className="movieSection">
        <h2>{movieData.Title}</h2>
        <p>{movieData.Year}</p>
        <img
          src={movieData.Poster !== "N/A" ? movieData.Poster : "/no-poster.png"}
          alt={movieData.Title}
          className="imgMovieSection"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/no-poster.png";
          }}
        />
        <p>{movieData.Plot}</p>
      </section>
      <section>
        <Link to="/" className="backButton">
          ← Tilbake til filmsøk
        </Link>
      </section>
    </main>
  );
}
