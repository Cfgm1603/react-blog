import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const checker = (update) => {
  return update;
};
export { checker };

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img className="imagePo" src={movie.Poster} />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
