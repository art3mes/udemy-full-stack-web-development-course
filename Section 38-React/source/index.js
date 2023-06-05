//var React=require("react");
//var ReactDOM=require("react-dom");
import React from "react";
import ReactDOM from "react-dom";

const myName="Koala";
const picSum = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";


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



    <p>Created by {myName}</p>
    <p>Copyright {new Date().getFullYear()}</p>



 <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <img
        className="manga"
        alt="middle-finger"
        src="https://w7.pngwing.com/pngs/447/1016/png-transparent-drawing-anime-art-manga-mouse-trap-black-hair-monochrome-human.png"
      />
      <img
        className="manga"
        alt="masked girl"
        src="https://1.bp.blogspot.com/--isum6zIVSs/Xua_8bKtrhI/AAAAAAAAA6k/AVvdROxcOM4fijFvzXDLiyW0qjadUKjUwCLcBGAsYHQ/s1600/pengertian-doujin.jpg"
      />
      <img
        className="manga"
        alt="wishful bride"
        src="https://images-cdn.9gag.com/photo/anQ4vgL_700b.jpg"
      />
      <img className="manga" alt="random" src="https://picsum.photos/200" />
      <img
        className="manga"
        alt="random but grayscaled"
        src={picSum + "?grayscale"}
      />
    </ul>
    <h1 style={{color:"orange", fontWeight:"700"}}>Hello Worlddddddddd!</h1>
    <h1 style={customStyle}>Hello World!</h1>
      </div>
      ,document.getElementById("root"));
    