import { useState, useEffect } from "react";
import History from "../components/History";
import MovieList from "../components/MovieList";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const storedHistory = localStorage.getItem("search");
  const [focused, setFocused] = useState(false);
  const [history, setHistory] = useState(
    storedHistory ? JSON.parse(storedHistory) : [],
  );

  console.log("Denne kommer fra storage", storedHistory);

  const baseUrl = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`; //Fikk hjelp av chatgpt da vi surret med dette i timen. Jeg fulgte ikke det som ble gjort i timen fordi det ikke var best practice. Lenke: https://chatgpt.com/share/69a192dd-b370-8006-ac16-f73e84a86db9

  useEffect(() => {
    //Bekreftet med ChatGPT at useEffect skulle brukes her
    const jamesBondFrontPage = async () => {
      try {
        const response = await fetch(`${baseUrl}&s=james+bond`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    jamesBondFrontPage();
  }, [baseUrl]);

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(history));
  }, [baseUrl, history]);

  const getMovies = async () => {
    if (search.length < 3) return; //Rettet opp i liten skrivefeil her ved hjelp av ChatGPT. Fra ">" til "<".

    try {
      const response = await fetch(`${baseUrl}&s=${search}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      //Fikk hjelp av chatGPT her da jeg hadde en ekstra "}" som jeg ikke så i egen gjennomgang: https://chatgpt.com/share/69b6bcbf-6060-8006-9f84-cd5c234d02f4
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    setHistory((prev) => [...prev, search]);
  };

  console.log(history);

  return (
    <main>
      <h1>Den store filmoversikten</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Søk etter din neste film
          <input
            type="search"
            placeholder="Harry Potter"
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            /*onBlur={() => setFocused(false)}*/
          ></input>
        </label>
        {focused ? <History history={history} setSearch={setSearch} /> : null}
        <button onClick={getMovies}>Søk</button>
      </form>
      <section>
        <MovieList movies={movies} />
      </section>
    </main>
  );
}
