import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasFetched, setHasFetched] = useState(false);
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6c84296c3cmshc22c621289814e1p103d64jsn6fdb9077bf73',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }
    };
    
    // const getData = (title) => {
    //   setLoading(true);
    //   debugger;
      
    //     console.log('fetching...')
    //     const response =  fetch('https://ott-details.p.rapidapi.com/search?title='+title, options);
    //     const data = response.json();
    //     debugger;
    //     if(data) {  setMovies(data);
    //                 setLoading(false); 
    //                 setHasFetched(true); }
  
      
    // }
    
    // useEffect (() => {

      // if(movies.length > 0) {
      //   return;
      // }
     
    //   const x = getData('avengers');
      
    //   console.log(x)
    // }, [movies])



    
    



    const letters = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";
    function AnimatedText(e){

        let iterations = 0;
        const interval = setInterval(() => {
          
          e.target.innerText = e.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
              return e.target.dataset.value[index];
            }
              
            return letters[Math.floor(Math.random() * 26)]
          })
        .join("");
         
          if(iterations >= e.target.dataset.value.length) clearInterval(interval);
          iterations += 1/3;
        }, 30);  
      
    }

    return (
        
            <div className='container'>

                <div className='principalTitle'>

                <h1 onMouseOver={AnimatedText} id='Title' className='Title' data-value="CRITICS CORNER">CRITICS CORNER</h1>

                <button className='button-81'>
                    <Link className='ButtonTitle' style={{textDecoration: 'none', color: 'black'}} to="/BlogList">Directo a la lista del Blogs!</Link>
                </button>

                


                   <button className='button-81' onClick={ () => console.log(movies)}> </button>

                </div>
                
            </div>

    );
}

export default Home;