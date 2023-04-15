import React , { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import Navbar from "./Navbar";
import LoadingSpinner from "./Loading";


function BlogList() {

    const [movies, setMovies] = useState([]);
    const [le, setLe] = useState(0);
    const [loading, setLoading] = useState(true)
    const [mov, setMov] = useState([]);
    const [url, setUrl] = useState([]);
    const [moviees, setMoviees] = useState([]);
    const [check, setCheck] = useState(true)


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f108dff7dcmsh5d9ea543da5bce3p1ba432jsnd8f1dd25cd03',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };

    const getData = (title) => {
        
        const response = fetch('https://online-movie-database.p.rapidapi.com/title/find?q='+title, options)
        .then(response => response.json())
        .then(response => setMovies(response))
        
        return(response)
        
    }
    useEffect (() => {

        getData('avengers')

      }, [])
      
      console.log(movies)

      if(Object.keys(movies).length==0){
        console.log("aun no")
        
      }else{
        if(check==true) {
            console.log('ya funciona')
            console.log(Object.keys(movies.results).length)
            setLe(Object.keys(movies.results).length)
            setMov(movies.results)
            setCheck(false)
        }
        
        console.log(mov)
      }
    
    const movie1 = {
    
        "title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "synopsis": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."

    }
    
    return (
        <div>
             <Navbar />

            <h1>Blog List</h1>
               
                <div className="containerBL">
                <button className='button-81' onClick={ () => console.log(movies)}> </button>
                    
                    <div className="containerL">

                        <button onClick={() => setLoading(false)}> Funciona, no funciona </button>
                        {
                            loading ? 
                            <LoadingSpinner/>
                            :
                            <div >
                                {le !== 0 ? (
                                    <div className='containerL'>
                                    {mov.map((moviee) => 
                                        setMoviees(moviee),
                                        setUrl(moviee.image),
                                        url.map((imagee)=>
                                        <MovieCard movie={moviees} image= {imagee} />
                                        )
                                    )}
                                    </div>
                                ) : (
                                    <div className="empty">
                                    <h1>No movies found</h1>
                                    </div>
                                )}
                            </div>
                        }

                        <Link className='ButtonTitle' style={{textDecoration: 'none'}} to="/BlogPost">

                        
                        
                                </Link>
                        
                    
                    </div>

                </div>    
                    
                    

            

        </div>
    );
}
export default BlogList;

