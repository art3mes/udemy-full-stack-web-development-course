import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";
//import * as pi from "./math.js";                wild card to import all

//then pi.default, pi.doublePi() and pi.triplePi() will give the required values
import { add, multiply, subtract, divide } from "./calculator";     //names should be name. orders can vary

ReactDOM.render(
  <div><ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>
  
  <ul>
  <li>{add(1, 2)}</li>
  <li>{multiply(2, 3)}</li>
  <li>{subtract(7, 2)}</li>
  <li>{divide(5, 2)}</li>
</ul></div>,
  document.getElementById("root")
);
