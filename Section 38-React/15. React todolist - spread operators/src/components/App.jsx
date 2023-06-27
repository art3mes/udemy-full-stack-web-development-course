import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");
  const [List, setList] = useState([]); //item array

  function handleChange(event) {
    const newValue = event.target.value;
    setListItem(newValue);
  }
  function buttonHandler() {
    setList((prevItems) => {
      return [...prevItems, listItem];
    });
    setListItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={listItem} />
        <button onClick={buttonHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {List.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
