import React, { useEffect, useState }from 'react';

//Navegación entre las paginas
import { BrowserRouter as Router, Routes, Route, Navigate, json } from "react-router-dom";

import './App.css';

//Importamos las paginas que vamos a utilizar
import Layout from './layout';
import Home from './home';
import BlogList from './components/BlogList';
import BlogPost from './BlogPost';

function App() {
  
    return (
      <>
      <Router>
      <Routes>
        //Layout le da la estructura base a todas las paginas
        <Route path="/" element={<Layout />}>
          //Ahora se indica que la ruta inicial va a ser la pagina Home
          <Route index element={<Home/>} />
          //Ahora se indica que el tag bloglist va a ser la pagina BlogList
          <Route path="bloglist" element={<BlogList />} />
          <Route path="blogpost" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
    </>
    );
}

export default App;
