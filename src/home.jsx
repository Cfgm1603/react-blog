import React, { useEffect } from 'react';

import { Link } from "react-router-dom";



function Home({movie}) {
    
  

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
                    <Link  className='ButtonTitle' style={{textDecoration: 'none', color: 'black'}} to="/BlogList">Directo a la lista del Blogs!</Link>
                </button>

                </div>
                
            </div>

    );
}

export default Home;