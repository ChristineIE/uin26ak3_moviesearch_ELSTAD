import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Slet med å få dette til å funke pga. feil navn på const. Ble mye knot og "følgefeil" på grunn av det. Konfererte derfor en del med ChatGPT.
export default function Movie() {
  const { movie } = useParams();
  const [movieData, setMovieData] = useState(null);

  const baseUrl = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(`${baseUrl}&i=${movie}`);
        const data = await response.json();
        setMovieData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getMovie();
  }, [baseUrl, movie]);

  if (!movieData) return <p>Laster...</p>;

  return (
    <main>
      <section>
        <h2>{movieData.Title}</h2>
        <p>{movieData.Plot}</p>
      </section>
      <section></section>
    </main>
  );
}
