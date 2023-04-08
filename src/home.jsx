import React from 'react';

import { Link } from "react-router-dom";

import "./css/Home.css"

function Home() {
    return (
        <>

        <body>
            <div className='container'>

                <h1 className='Title' data-value="CRITICS CORNER">CRITICS CORNER</h1>
                

                <li>
                    <Link to="/BlogList">BlogList</Link>
                </li>
            </div>

            

        </body>
        </>
        
    );
}

export default Home;