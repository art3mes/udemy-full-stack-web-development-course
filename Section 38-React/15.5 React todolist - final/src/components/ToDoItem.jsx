import React from "react";

function TodoItem(props) {
  return (
    <div onClick={()=>{
      return props.onChecked(props.id)            //only gets called when the above function is called
    }}>
      <li>{props.item}</li>
    </div>
  );
}
export default TodoItem;
