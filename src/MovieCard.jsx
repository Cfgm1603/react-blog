import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        
        <div className="movie">
            <Link className='ButtonTitle' style={{textDecoration: 'none'}} to="/BlogPost">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A'? movie.Poster : 'https://via.placerholder.com/400'} alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
            </Link>
        </div>


    )
}

export default MovieCard;

