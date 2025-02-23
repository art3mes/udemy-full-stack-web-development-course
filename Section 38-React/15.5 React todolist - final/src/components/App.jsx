import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

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
  function deleteItem(id){
    setList((prevItems=>{
      return prevItems.filter((item,index)=>{
        return index!==id
      })
    }))
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea 
        changeHandler={handleChange}
        handleButton={buttonHandler}
        item={listItem}/>
      <div>
        <ul>
          {List.map((toDoItem, index) => (
            <TodoItem 
            key={index}
            id={index}
            item={toDoItem}
            onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
