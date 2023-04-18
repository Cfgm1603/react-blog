import React , { useState, useEffect }from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({ movie, image }) => {
    const id = movie.id
    

    return (    
        <div className="movie">

            
            
            <div>
                <p>{movie.year}</p>
            </div>
            <div>
                
            </div>
            <div>
                <span>{movie.titleType}</span>
                <h3>{movie.title}</h3>
            </div>
            
        </div>


    )
}

export default MovieCard;

