import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading"; //imported the heading component
import List from "./List"; //imported the list component

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
