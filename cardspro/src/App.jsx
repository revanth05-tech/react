import React from 'react';
import './App.css';
import Card from './components/card.jsx';
import User from './components/user.jsx';

const App = () => {

const arr = [
  { name: 'Alice' },
  {age : 30}
];
  
  return (
    <div className='parent'>
      {arr.map(function(char){
        return char.age;
      })}
    </div>
  )
};

export default App;
