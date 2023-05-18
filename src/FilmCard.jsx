import React from "react";

const FilmCard = ({ film }) => {
  return (
    <div className="movie">
      <div>
        <p>{film.release_date}</p>
      </div>
      <div>
        <img
          src={
            film.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
              : "https://via.placeholder.com/400"
          }
          //   src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.original_title}
        />
      </div>
      <div>
        <span>{film.vote_average} / 10</span>
        <h3>{film.original_title}</h3>
      </div>
    </div>
  );
};

export default FilmCard;
