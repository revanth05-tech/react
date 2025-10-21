import React from 'react';
import Card from './component/card';
import Navbar from './component/navbar';
import './App.css';
import naruto from './images/naruto.avif'; // ✅ Import the image

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <img className='img_card' src={naruto} alt="Naruto" />
        <h1>Hello World</h1>
        <button className="btn">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
