import React from 'react';
import './App.css';

import Anim from "./animation/Anim.js";
import book from './book.jpg'


function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={book} alt="img" className="Z-index" />
        <img src={book} alt="img" className="Z-index" />
        <img src={book} alt="img" />
        <div className="anim">
          <Anim />
        </div > 
      </div>
    </div>
  );
}

export default App;
