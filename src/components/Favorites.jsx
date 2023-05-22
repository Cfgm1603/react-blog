import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ListFW from "./ListFa|WL";
import { getFromFirebase } from "../Helpers/firebaseHelpers";

function Favorites() {
  const [loading, setLoading] = useState(true);
  const [le, setLe] = useState(0);
  const [check, setCheck] = useState(true);
  const [fav, setFav] = useState([]);
  const [favo, setFavo] = useState([]);

  const getFav = async () => {
    const data = await getFromFirebase("Favorites");

    if (data.length != 0) {
      setFavo(data);
    }
  };

  useEffect(() => {
    getFav();
  }, [fav]);

  if (favo.length == 0) {
    console.log("aun no");
  } else {
    if (check == true) {
      console.log("ya funciona");

      setLe(favo.length);
      setCheck(false);
      setLoading(false);

      console.log(favo);
      
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="containerL">
        <ListFW le={le} loading={loading} type="Favorites" fav={favo}></ListFW>
      </div>
    </div>
  );
}
export default Favorites;
