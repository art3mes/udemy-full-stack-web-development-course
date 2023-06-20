import React, { useState } from "react";

function App() {
  const [mousedOver, setMousedOver] = useState(false);

  function toBlack() {
    setMousedOver(true);
  }
  function defaultColor() {
    setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mousedOver ? "black" : "white" }}
        onMouseOver={toBlack}
        onMouseOut={defaultColor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
