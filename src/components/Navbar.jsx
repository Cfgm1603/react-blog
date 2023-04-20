import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link,useMatch,useResolvedPath} from "react-router-dom";
import { useState, useEffect } from "react";
import { faArrowDownUpLock } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() { 

    const [movies, setMovies] = useState([]);
    const [moviess, setMoviess] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [capture, setCapture] = useState(false)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c84296c3cmshc22c621289814e1p103d64jsn6fdb9077bf73',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const fetchNew =  async() => {

        const url = 'http://www.omdbapi.com/?t=matilda&apikey=4c3f3840'
        const response = await fetch(url)
        const responseJ = await response.json()
        console.log(responseJ)

        if(responseJ.Search){
            setMoviess(responseJ.Search)
        }

        console.log(moviess)

    }

    useEffect (() => {
        
        fetchNew()

      }, [])
    
    const getData = (title) => {
        
        const response = fetch('https://online-movie-database.p.rapidapi.com/title/find?q='+title, options)
        .then(response => response.json())
        .then(response => setMovies(response))

        if (response && response.length > 0) {
            setMovies(response.response);
        }

        console.log(movies)
        setCapture(true)
        return(response)

    }
    
    const path = window.location.pathname
    
    return (
        <nav className= "navbar"> 
            <Link to= "/" className="web-name">
            Critics Corner
            </Link>
            <div className="nav-center">
            <div className="search-bar">
                <input type="text" 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}/>
                
                <button type="submit" 
                alt="search"
                onClick={() => getData(searchTerm)}> <FontAwesomeIcon icon="search" /> </button>
            </div>
            </div>

            <div className="nav-right">
            <ul>
                <CustomLink to= "/bloglist">Bloglist</CustomLink>
            </ul>
            </div>
        </nav>
    )
}

function CustomLink({to, children, ...props }) {
    const resolvedpath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedpath.pathname, end:true} )
    return(
        <li className={ isActive === to ? "active" : "" }>
            <Link to = {to} {...props}> {children}</Link>
        </li>
    )

}