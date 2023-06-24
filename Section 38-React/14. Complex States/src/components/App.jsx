import React, { useState } from "react";

function App() {
  // const [Fname, setFname] = useState("");
  // const [Lname, setLname] = useState("");
  const [FullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  // function handleFChange(event) {
  //   setFname(event.target.value);
  // }
  // function handleLChange(event) {
  //   setLname(event.target.value);
  // }
  function changeFullName(event) {
    const nameOfInput = event.target.name;
    const newValue = event.target.value;

    setFullName((prevValue) => {
      if (nameOfInput === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (nameOfInput === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {FullName.fName} {FullName.lName}
      </h1>
      <form>
        <input
          onChange={changeFullName}
          name="fName"
          placeholder="First Name"
          value={FullName.fName}
        />
        <input
          onChange={changeFullName}
          name="lName"
          placeholder="Last Name"
          value={FullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
