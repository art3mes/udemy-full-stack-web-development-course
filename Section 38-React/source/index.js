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
    <h4>Hello {name1 +" "+name2}  way 1</h4>           ***********{} can run only js expressions. not statements******
    <h2>Hello {name1} {name2} way 2</h2>
    <h3>Hello {`${name1} ${name2}`}</h3> above line is interpreted as a string using the ES6 template literals. and then we've got that string being inserted in as JavaScript in these curly braces from JSX. And

then it's being inserted as a string into our h1 and then that's being inserted as JavaScript code

into a JavaScript file.
    <p>Your lucky number is {Math.floor(Math.random()*10)}</p>
      </div>
      ,document.getElementById("root"));
    