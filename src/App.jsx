import React from 'react';
import Card from './component/card';

const App = () => {
  const name = 'Revanth'
  return (
    <div>
      <Card />
      <h1>Hello, {name}!</h1>
    </div>
  )
}

export default App
