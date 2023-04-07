import logo from './logo.svg';
import './App.css';
import BlogList from './BlogList.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Bienvenidos
      <br></br>
      <button onClick={
        () => {
          
          window.location.href = '/BlogList.js';
        }
      }>BlogList</button>
    </div>
  );
}

export default App;
