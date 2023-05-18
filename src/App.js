import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import FilmCard from "./FilmCard";

// const OMDb_API = "http://www.omdbapi.com/?apikey=43666c2c"
const TMDB_API_KEY =
  "https://api.themoviedb.org/3/search/movie?api_key=b7e886f12750bacf9d4b984bf9d6f5ed";

const App = () => {
  const [film, setFilm] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(
      `${TMDB_API_KEY}&query=${encodeURIComponent(title)}`
    );
    const data = await response.json();
    // const simplifiedData = data.results.map(movie => movie.title);
    // console.log(data.results);

    setFilm(data.results);
    if (film.release_date == "") {
      film.release_date = " ";
    }
  };

  useEffect(() => {
    searchMovies(search);
  }, []);

  return (
    <div className="app">
      <h1>Filmesa</h1>
      <div className="search">
        <input 
        placeholder="Search for Films" 
        value={search}
        onChange={(c) => setSearch(c.target.value)}
        />
        <img 
        src={SearchIcon} alt="search"
        onClick={() => searchMovies(search)}
         />
      </div>

      {film?.length > 0 ? (
        <div className="container">
          {film.map((film) => (
            <FilmCard film={film} />
          ))}
          {console.log(film[5])}
        </div>
      ) : (
        <div className="empty">
          <h2>No films found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
