import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import ToDoItem from "./ToDoItem";

function App() {
  const [listItem, setListItem] = useState("");
  const [List, setList] = useState([]); //item array

  function handleChange(event) {
    const newValue = event.target.value;
    setListItem(newValue);
  }
  function buttonHandler() {
    setList((prevItems) => {
      if (listItem === "") {
        return [...prevItems];
      } else {
        return [...prevItems, listItem];
      }
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
          {List.map((toDoItem) => (
            <TodoItem item={toDoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
