import React, { useState } from "react";

function TodoItem(props) {
  const [isStiked, strikeHandler] = useState(false);
  function striker() {
    strikeHandler((preValue) => {
      return !preValue;
    });
  }

  return (
    <div onClick={striker}>
      <li style={{ textDecoration: isStiked ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}
export default TodoItem;
