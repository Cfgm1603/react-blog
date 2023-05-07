import React from "react";

const TopMovies = ({ movie }) => {
  return (
    <div className="containerTops">
      <b>{movie.title}</b>
    </div>
  );
};
export default TopMovies;
