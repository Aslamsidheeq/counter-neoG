import "./styles.css";
import React, { useState } from "react"; //jsx and useState
export default function App() {
  var [likeCounter, setLikeCounter] = useState(0); //0 is the initial value of like counter
  function clickHandler() {
    likeCounter = likeCounter + 1;
    setLikeCounter(likeCounter);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={clickHandler}>click</button>
      {likeCounter}
    </div>
  );
}
