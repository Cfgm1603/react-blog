import React, { useEffect, useState } from 'react';

//Navegación entre las paginas
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import './App.css';

//Importamos las paginas que vamos a utilizar
import Layout from './layout';
import Home from './home';
import BlogList from './components/BlogList';

function App() {

const fetch = require('node-fetch');

const [movies, setMovies] = useState([]);

const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f108dff7dcmsh5d9ea543da5bce3p1ba432jsnd8f1dd25cd03',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
};

const getData = () => {
  fetch(url, options)
    .then(res => res.json())
    .then(json => setMovies(json))
}

useEffect (() => {
   getData();
}, [])

  return (
    <>
    <Router>
    <Routes>
      //Layout le da la estructura base a todas las paginas
      <Route path="/" element={<Layout />}>
        //Ahora se indica que la ruta inicial va a ser la pagina Home
        <Route index element={<Home movie = {movies} />} />
        //Ahora se indica que el tag bloglist va a ser la pagina BlogList
        <Route path="bloglist" element={<BlogList movie = {movies}/>} />
      </Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
