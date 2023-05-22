import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ListFW from "./ListFa|WL";
import { addToFirebase, getFromFirebase } from "../Helpers/firebaseHelpers";

function Create() {
  const [loading, setLoading] = useState(true);
  const [le, setLe] = useState(0);
  const [check, setCheck] = useState(true);
  const [fav, setFav] = useState([]);
  const [favo, setFavo] = useState([]);
  const [title, setTitle] = useState([]);
  

  const getFav = async () => {
    const data = await getFromFirebase("Create");

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

  const createMovie = async () => {
    const title = prompt("Please enter the name of your movie:").toString();
    
    


    

    
    await addToFirebase(
      { objectToSave: { title } },
      "Create"
    );
    window.location.reload(false);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="containerL">
      <div className="createBox">
      <button
                  className="button-812E"
                  style={{ float: "right" }}
                  onClick={createMovie}
                >
                  Create Movie!
                </button>
              </div>
        <ListFW le={le} loading={loading} type="Create" fav={favo}></ListFW>
      </div>
    </div>
  );
}
export default Create;
