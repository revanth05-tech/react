import React from 'react';
import Card from './component/card';
import Navbar from './component/navbar';
import './App.css'; // your external CSS file

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <img class='img_card' src='C:\Users\osait\Desktop\react\images\naruto.avif'></img>
        <h1>Hello World</h1>
        <button className="btn">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
