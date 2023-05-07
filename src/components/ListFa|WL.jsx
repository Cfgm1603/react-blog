import React from 'react';
import LoadingSpinner from "./Loading";
import MovieF from "./MovieF"
//import MovieCard from "../MovieCard";

const ListFW = ( {le, loading, type, fav} ) => {

    return (

        
        <div className="containerL">
            
                        {
                            
                            loading ? 
                            <LoadingSpinner/>
                            :
                            
                            <div >
                                {
                                le !== 0 ? (
                                    <div className='containerL'>
                                    {fav.map((moviee) => 
                                        
                                        <MovieF movie={moviee}  type = {type}/>
                                         
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
    )

}
export default ListFW;