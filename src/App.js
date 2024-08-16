import './App.css';
import React, { Component } from 'react'
import awesomevideo from './images/awesomevideo.mp4'

function App() {
  return (
    <div className="App">
      <a className="Sophie" href="http://twitter.com/breadsoph">Sophie</a>
      <br></br>                 
      <a className="Gummy" href="http://twitter.com/kinggunnmy">Gummy</a>
      <br></br>
      <video loop autoPlay muted width="750" height="500" controls >
        <source src={awesomevideo} type="video/mp4"/>
      </video>

    </div>
  );
}

export default App;
