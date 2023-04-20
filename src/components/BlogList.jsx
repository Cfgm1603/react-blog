import React , { useEffect, useState } from 'react';

import Navbar from "./Navbar";

import List from "./List"

function BlogList() {

    const [movies, setMovies] = useState([]);
    const [le, setLe] = useState(0);
    const [loading, setLoading] = useState(true)
    const [capture, setCapture] = useState(false)
    
    
    const [title, setTitle] = useState('Avengers');
    const [mov, setMov] = useState([]);
    const [name, setName] = useState([]);
    const [url, setUrl] = useState([]);
    const [moviees, setMoviees] = useState([]);
    const [check, setCheck] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');

    
    const getData =  async(title) => {

      const url = `http://www.omdbapi.com/?s=${title}&plot=full&apikey=4c3f3840`  
      const response = await fetch(url)
      const responseJ = await response.json()
      setMovies(await responseJ)
      console.log(movies)
      

  }
    useEffect (() => {
        
        getData(title)

      }, [title])
      

      

      function refreshPage() {
        window.location.reload(false);
      }
      

      const handleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
        console.log(title)
      };

     
        
      const updateMovies = (searchTerm) => {
        debugger
        setLoading(true)
        setCheck(true)
        setMovies([])
        getData(searchTerm)
        setTitle(searchTerm)
        

      }
      if((movies.length==0)){
        console.log("aun no")

      }else{
        if(check==true) {
            console.log('ya funciona')
            
            setLe(movies.length)
            setMov(movies.Search)
            setCheck(false)
            setLoading(false)
            console.log(movies.Search)

        }   
      }
      
        
    
    return (
      
        <div>
             <Navbar  />
            
                <div className="containerL">
                    <div>
                <div className="search-bar">
                    <input type="text" 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}/>
                    
                    <button type="submit" 
                    alt="search"
                    onClick={() => updateMovies(searchTerm)}>  </button>
                </div>
                
                <div><h1 className="web-name">Movies with the title: {title}</h1></div>

                </div>


                <List loading = { loading } le = { le } mov = { mov } ></List>
                     

                </div>    
                    
        </div>
    );
}
export default BlogList;



