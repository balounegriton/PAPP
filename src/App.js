import React from 'react';
import Anim1 from "./animation/Amin1.js";
import './App.css';
import book from './book.jpg'
function App() {
  return (
    <div className="App">
  <div className="container"> 
      <img src={book} alt="img" className="Z-index" />
      <img src={book} alt="img" className="Z-index" />
      <img src={book} alt="img" />
     <div className="anim1">
     <Anim1 />
       </div > 
      </div>


      <div className="container"> 
      <img src={book} alt="img" className="Z-index" />
      <img src={book} alt="img" className="Z-index" />
      <img src={book} alt="img" />
      </div>

      <div className="container"> 
      <img src={book} alt="img" className="Z-index" />
      <img src={book} alt="img" className="Z-index" />
      <img src={book} alt="img" />
     <div className="anim1">
     <Anim1 />
       </div > 
       
      </div>
      <div className="container"> 
      <img src={book} alt="img" className="Z-index" />
      <img src={book} alt="img" className="Z-index" />
      <img src={book} alt="img" />
      </div>
    
    </div>
  );
}

export default App;
