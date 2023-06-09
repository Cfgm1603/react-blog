import React, { useState } from "react";

import {
  updateFromFirebase,
  deleteFromFirebase,
} from "../Helpers/firebaseHelpers";

const MovieF = ({ movie, type }) => {
  const [title, setTitle] = useState([]);

  const updateF = async () => {
    const tit = prompt("Please enter the new name:", movie.title).toString();
    setTitle(tit);

    const id = movie.id;
    const poster = movie.poster;

    await updateFromFirebase(
      movie.id,

      { id, title: tit, poster },
      type
    );
    window.location.reload(false);
  };

  const deleteF = async () => {
    await deleteFromFirebase(movie.id, type);
    window.location.reload(false);
  };

  return (
    <div>
      <div className="containerF ">
        <div>
          <div className="imgCont">
            <img className="imageF" src={movie.poster} />
          </div>
          <div className="contentL">
            <h2 className="text">{movie.title}</h2>

            <br />
            <br />
            <br />
            <br />
            <div className="buttons">
              <div>
                <button
                  className="button-812I"
                  style={{ float: "left" }}
                  onClick={deleteF}
                >
                  Delete
                </button>
              </div>
              <div>
                {type !== "Create" ? (
                  <button
                    className="button-812I"
                    style={{ float: "right" }}
                    onClick={updateF}
                  >
                    Update
                  </button>
                ) : null}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MovieF;
