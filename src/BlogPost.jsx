import React,{ useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
//Import components
import LoadingSpinner from "./components/Loading";
import Navbar from "./components/Navbar"; 
import TopMovies from './components/topMovies';
//Import functions 
import { addToFirebase, getFromFirebase } from "./Helpers/firebaseHelpers";

//import context
import { MovieFWContext } from './MoviesFWContext';




function BlogPost (  ){

    const {favo, setFavo, watch, setWatch} = useContext(MovieFWContext)
    

       


        const updateF = async(type) => {
            //Fetches FAVORITE data from Firebase
                    
            const data = await getFromFirebase(
                type
            );

            if(data.length!=0){
                if(type==="Favorites"){
                  setFavo(data)
                }else{
                  setWatch(data)
                }
              }
        }

        const [movies, setMovies] = useState([]);
        const [count, setCount] = useState([]);
        const [loading, setLoading] = useState(true)

        //Trae la id de la pelicula
        const location = useLocation();
        const id = location.state

        const addToFB = async (imbdid, title, poster, type) => {
            
            const res = await addToFirebase(
              { objectToSave: { id, title, poster } },
              type
            );
            

            if(res!='') {
                alert("The movie has been added to " + type)
            }
            
            await updateF(type)
            console.log(favo)
            

        };
        
 
        const fetchNew =  async() => {

            const url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=4c3f3840`
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
                                    
                                    <div className='contentP'>
                                        <h3>Year: <i>{ movies.Year }</i>  </h3> 
                                        <h3>Duration: <i>{ movies.Runtime}</i>  </h3> 
                                        

                                        <h3>Synopsis:</h3>
                                        <i>{movies.Plot}</i> 
                                    
                                      <h3>Actors: </h3> {movies.Actors}

                                      <h3>Director: </h3> {movies.Director}



                                      
                                      <h3>Genre: <i>{ movies.Genre}</i>  </h3> 
                                        
                                    </div>
                                </div>
                                
                                
                                <div style={{width: 900}}>
                                <button className='button-81' style={{float:'left'}}  onClick={() => addToFB(movies.imbdid ,movies.Title, movies.Poster, "Favorites" )} >Add to Favorites</button>
                               
                                <button className='button-81'  style={{float:'right'}} onClick={() => addToFB(movies.imbdid ,movies.Title, movies.Poster,"Watch-Later" )}>Add to watch later</button>
                                </div>
                                <br /><br /><br />  
                                <div >
                                <div style={{float:'left'}} className='favorites'> 
                                    <h3>Top liked movies:</h3>
                                    {favo.map((moviee, index) => {
                                        if (index < 5) {
                                            return <TopMovies movie={moviee} />;
                                        }
                                        return null;
                                    })}
                                </div>

                                <div className='favorites' style={{float:'right'}}> 
                                    <h3>Top liked movies:</h3>
                                    {watch.map((moviee, index) => {
                                        if (index < 5) {
                                            return <TopMovies movie={moviee} />;
                                        }
                                        return null;
                                    })}
                                </div>
                                
                                </div>
                                
                            </div>
                        }

                        
                        
            </div>
        </div>
        
    )
}
export default BlogPost;