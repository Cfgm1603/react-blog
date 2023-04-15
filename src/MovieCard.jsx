import React , { useState }from 'react';
import { Link } from "react-router-dom";


const MovieCard = ({ movie },{image}) => {
    return (    
        
        
        <div className="movie">
            <Link className='ButtonTitle' style={{textDecoration: 'none'}} to="/BlogPost">
            <div>
                <p>{movie.year}</p>
            </div>
            <div>
                
                <img src={movie.Poster !== 'N/A'? movie.Poster : 'https://via.placerholder.com/400'} alt={image.url}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.title}</h3>
            </div>
            </Link>
        </div>


    )
}

export default MovieCard;

