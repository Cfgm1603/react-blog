
import React from 'react';

//Navegación entre las paginas
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

//Para API
import React, { useEffect, useState } from 'react';
//f108dff7dcmsh5d9ea543da5bce3p1ba432jsnd8f1dd25cd03


//Importamos las paginas que vamos a utilizar
import Layout from './layout';
import Home from './home';
import BlogList from './components/BlogList';

function App() {
  return (
    //Esto va a direccionar a la ruta que se le indique 
    <Router>
    <Routes>
      //Layout le da la estructura base a todas las paginas
      <Route path="/" element={<Layout />}>
        //Ahora se indica que la ruta inicial va a ser la pagina Home
        <Route index element={<Home />} />
        //Ahora se indica que el tag bloglist va a ser la pagina BlogList
        <Route path="bloglist" element={<BlogList />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
