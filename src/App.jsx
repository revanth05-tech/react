import React from 'react';
import Card from './component/card';
import Navbar from './component/navbar';
import './App.css'; // your external CSS file

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <img class='img_card' src='https://www.google.com/imgres?q=pictures&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F825383494%2Fphoto%2Fbusiness-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DwtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fstruggle&docid=Pz5uFs24yRRUhM&tbnid=c_k0XZB-zd8bBM&vet=12ahUKEwjp0vCcvbWQAxWdmK8BHXRVFkEQM3oECBoQAA..i&w=612&h=348&hcb=2&ved=2ahUKEwjp0vCcvbWQAxWdmK8BHXRVFkEQM3oECBoQAA'></img>
        <h1>Hello World</h1>
        <button className="btn">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
