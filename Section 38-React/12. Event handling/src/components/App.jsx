import React, { useState } from "react";

function App() {
  const [mousedOver, setMousedOver] = useState(false);
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function toBlack() {
    setMousedOver(true);
  }
  function defaultColor() {
    setMousedOver(false);
  }

  function handleChange(event) {
    // console.log(event.target);
    //  the event is the event which triggered the onChange

    // console.log(event.target.placeholder);
    // the target is the element that triggered this event and 
    
    // console.log(event.target.type);
    // the value or any of the other properties  on the target are the things that correspond to the value of some of these attributes.
    
    console.log(event.target.value);
    setName(event.target.value);
  }
  function changeHeading() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        style={{ backgroundColor: mousedOver ? "black" : "white" }}
        onMouseOver={toBlack}
        onMouseOut={defaultColor}
        onClick={changeHeading}
      >
        Submit
      </button>
    </div>
  );
}

export default App;


