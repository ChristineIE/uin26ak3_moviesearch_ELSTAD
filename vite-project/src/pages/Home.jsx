import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState();

  const baseUrl = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`; //Fikk hjelp av chatgpt da vi surret med dette i timen. Jeg fulgte ikke det som ble gjort i timen fordi det ikke var best practice. Lenke: https://chatgpt.com/share/69a192dd-b370-8006-ac16-f73e84a86db9

  const getMovies = async () => {
    try {
      const response = await fetch(`${baseUrl}&s=${search}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main>
      <h1>Forside</h1>
      <form>
        <label>
          Søk etter film
          <input
            type="search"
            placeholder="Harry Potter"
            onChange={handleChange}
          ></input>
        </label>
      </form>
      <button onClick={getMovies}>Søk</button>
    </main>
  );
}
