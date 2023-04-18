import React , { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import Navbar from "./Navbar";
import LoadingSpinner from "./Loading";


function BlogList() {

    const [movies, setMovies] = useState([]);
    const [le, setLe] = useState(0);
    const [loading, setLoading] = useState(true)
    const [capture, setCapture] = useState(false)

    const [title, setTitle] = useState("John Wick");
    const [mov, setMov] = useState([]);
    const [name, setName] = useState([]);
    const [url, setUrl] = useState([]);
    const [moviees, setMoviees] = useState([]);
    const [check, setCheck] = useState(true)

    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c84296c3cmshc22c621289814e1p103d64jsn6fdb9077bf73',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    const getData = (title) => {
        
        const response = fetch('https://online-movie-database.p.rapidapi.com/title/find?q='+title, options)
        .then(response => response.json())
        .then(response => setMovies(response))
        setCapture(true)
        
        return(response)
        
    }
    useEffect (() => {
        
        getData(title)

      }, [title])
      
      

      if(Object.keys(movies).length==0){
        console.log("aun no")
      }else{
        if(check==true) {
            console.log('ya funciona')
            
            setLe(Object.keys(movies.results).length)
            setMov(movies.results)
            setCheck(false)
            setLoading(false)
            console.log(movies.results)
        }   
      }

      function refreshPage() {
        window.location.reload(false);
      }
      

      const handleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
        console.log(title)

      };
    
    return (
        <div>
             <Navbar />

            

            
                <div className="containerL">
                
                
            
                <h1 className="web-name">Listado de peliculas con el titulo: {title}</h1>
                    <div className="containerL">
                    

                        
                        {
                            loading ? 
                            <LoadingSpinner/>
                            :
                            <div >
                                {le !== 0 ? (
                                    <div className='containerL'>
                                    {mov.map((moviee) => 
                                        <Link className='ButtonTitle' style={{textDecoration: 'none'}} to={"/BlogPost"} state = { "moviee" }>
                                            <MovieCard movie={moviee} image = {moviee.image}/></Link>
                                        
                                        
                                    )}
                                    </div>
                                ) : (
                                    <div className="empty">
                                    <h1>No movies found</h1>
                                    </div>
                                )}
                            </div>
                        }

                        
                        
                    
                    </div>

                </div>    
                    
                    

            

        </div>
    );
}
export default BlogList;

