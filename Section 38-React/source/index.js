//var React=require("react");
//var ReactDOM=require("react-dom");
import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(what to enter,where to enter,when to enter);
//first argumment takes only one html element
ReactDOM.render( document.getElementById("root"));
ReactDOM.render(
    <div>
        <h1>Hello</h1>,
      <h2>My Favourite Movies:</h2>
      <ul>
        <li>Thor: Ragnarok</li>
        <li>DBS: Broly</li>
        <li>Your Name</li>
        </ul>
      </div>
      ,document.getElementById("root"));
    