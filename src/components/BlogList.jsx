import React from 'react';

import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import Navbar from "./Navbar";

function BlogList(movie) {
    console.log(movie);
    return (
        <div>
             <Navbar />
            <h1>Blog List</h1>
            {
                
                movie?.length > 0 
                ? (
                    <div className="container">
                    {movie.map((movie) =>
                    <MovieCard movie = {movie}/>)}
                    </div>
                ) :
                (
                    <div className="empty">
                        <h1>No movies found</h1>
                    </div>
                        
                )
            }
            
            
        </div>
    );
}
export default BlogList;

