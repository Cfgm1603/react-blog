import React from "react";
import LoadingSpinner from "./Loading";
import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ loading, le, mov }) => {
  return (
    <div className="containerL">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {le !== 0 ? (
            <div className="containerL">
              {mov.map((moviee) => (
                <Link
                  className="ButtonTitle"
                  style={{ textDecoration: "none" }}
                  to={"/BlogPost"}
                  state={moviee.imdbID}
                >
                  <MovieCard movie={moviee} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h1>No movies found</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default MovieList;
