import React, { useEffect, useState } from "react";

//Navegación entre las paginas
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  json,
} from "react-router-dom";

//Database fav
import { getFromFirebase } from "./Helpers/firebaseHelpers";

import "./App.css";

//Importamos las paginas que vamos a utilizar
import Layout from "./layout";
import Home from "./home";
import BlogList from "./components/BlogList";
import BlogPost from "./BlogPost";
import Favorites from "./components/Favorites";
import Watch from "./components/Watch";

import { MovieFWContext } from "./MoviesFWContext";

function App() {
  const [favo, setFavo] = useState([]);
  const [watch, setWatch] = useState([]);

  //Fetches FAVORITE data from Firebase
  const getFav = async (type) => {
    const data = await getFromFirebase(type);

    if (data.length != 0) {
      if (type === "Favorites") {
        setFavo(data);
      } else {
        setWatch(data);
      }
    }
  };

  useEffect(() => {
    getFav("Favorites");
    getFav("Watch-Later");
  }, []);

  return (
    <>
      <MovieFWContext.Provider value={{ favo, setFavo, watch, setWatch }}>
        <Router>
          <Routes>
            //Layout le da la estructura base a todas las paginas
            <Route path="/" element={<Layout />}>
              //Ahora se indica que la ruta inicial va a ser la pagina Home
              <Route index element={<Home />} />
              //Ahora se indica que el tag bloglist va a ser la pagina BlogList
              <Route path="bloglist" element={<BlogList />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="blogpost" element={<BlogPost />} />
              <Route path="watch" element={<Watch />} />
            </Route>
          </Routes>
        </Router>
      </MovieFWContext.Provider>
    </>
  );
}

export default App;
