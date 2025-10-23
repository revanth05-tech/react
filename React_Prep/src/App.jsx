import React from "react";
import Card from "./component/card";
import naruto from "./images/naruto.avif";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Card name="Naruto Uzumaki" age={17} img={naruto} />
    </div>
  );
};

export default App;
