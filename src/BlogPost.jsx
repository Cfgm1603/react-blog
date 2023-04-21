import React,{ useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import LoadingSpinner from "./components/Loading";
import Navbar from "./components/Navbar";

 
import { addToFirebase } from "./Helpers/firebaseHelpers";


function BlogPost (  ){

        const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(true)

        //Trae la id de la pelicula
        const location = useLocation();
        const state = location.state

        const addFavorite = async (name, description) => {
            addToFirebase(
              { objectToSave: { name, description } },
              "PruebaFavoritos"
            );
          };
        

        const fetchNew =  async() => {

            const url = `http://www.omdbapi.com/?i=${state}&plot=full&apikey=4c3f3840`
            const response = await fetch(url)
            const responseJ = await response.json()    
            if(Object.keys(responseJ).length==0){
                
            }else{
                setMovies(responseJ)
                setLoading(false)
            }

            
        }
        

        useEffect (() => {
        
            fetchNew()
    
          }, [])
          console.log(movies)
    
    return (
        
        <div>
        <Navbar></Navbar>

             <div className='loader' >
                        
                        {
                            loading ? 
                            <LoadingSpinner/>
                            :
                            <div className="container" >
                                <div>
                                    <h1>{movies.Title}</h1>
                                </div>

                                <div className='post'>
                                    <div className='imagePo'>
                                        <img src={movies.Poster}></img>
                                    </div>
                                    
                                    <div className='content'>
                                        <h3>Year: <i>{ movies.Year }</i>  </h3> 
                                        <h3>Duration: <i>{ movies.Runtime}</i>  </h3> 
                                        
                                        

                                        <h3>Synopsis:</h3>
                                        <i>{movies.Plot}</i> 
                                    
                                      <h3>Actors: </h3> {movies.Actors}

                                      <h3>Director: </h3> {movies.Director}



                                      
                                      <h3>Genre: <i>{ movies.Genre}</i>  </h3> 


                                    

                                        
                                    </div>
                                </div>
                                
                                
                                <button onClick={() => addFavorite(movies.Title, movies.Poster)}>Add Favorite</button>
                                
                                
                            </div>
                        }

                        
                        
            </div>
        </div>
        
    )
}
export default BlogPost;