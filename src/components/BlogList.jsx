import React from 'react';

import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import Navbar from "./Navbar";
import BlogPost from '../BlogPost';

function BlogList() {
    
    const movie = {
    
        "title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "synopsis": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."

    }
    console.log(movie)
    
    return (
        <div>
             <Navbar />

            <h1>Blog List</h1>
               
                <div className="containerBL">

                    <div className="containerL">
                    <Link className='ButtonTitle' style={{textDecoration: 'none'}} to="/BlogPost">
                        <MovieCard movie = {movie}></MovieCard> </Link>
                        <MovieCard movie = {movie}></MovieCard>
                        <MovieCard movie = {movie}></MovieCard>
                        <MovieCard movie = {movie}></MovieCard>
                        <MovieCard movie = {movie}></MovieCard>
                    
                    </div>

                </div>    
                    
                    

            {
                // movie?.length > 0 
                // ? (
                //     <div className="container">
                //     {movie.map((movie) =>
                //     <MovieCard movie = {movie}/>)}
                //     </div>
                // ) :
                // (
                //     <div className="empty">
                //         <h1>No movies found</h1>
                //     </div>
                // )
            }

        </div>
    );
}
export default BlogList;

