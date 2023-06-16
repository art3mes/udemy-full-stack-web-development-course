import React from "react";
import Form from "./form";
var isLoggedIn = false;

function loginConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Form />;
  }
}
function App() {
  return <div className="container">{loginConditionally()}</div>;
}

export default App;
