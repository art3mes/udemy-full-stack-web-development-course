import React from "react";
import Form from "./form";


var isLoggedIn = false;

// function loginConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Form />;
//   }
// }

//if else are statements. ternary operators are expressions. so it can be used inside return statements
//you can use NULL to return nothing
// use && if left side is true, run the right hand side

const currentTime = new Date(2019, 11, 1, 22).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* ternary operator */}
      {isLoggedIn === true ? <h1>Hello</h1> : <Form />}

      {/*  && operator will render only one*/}
      {currentTime >20 && <h1>GO SLEEP</h1>}        
    </div>
  );
}

export default App;
