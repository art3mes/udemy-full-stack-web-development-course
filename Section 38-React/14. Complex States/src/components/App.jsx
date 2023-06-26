import React, { useState } from "react";

function App() {
  // const [Fname, setFname] = useState("");
  // const [Lname, setLname] = useState("");
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  // function handleFChange(event) {
  //   setFname(event.target.value);
  // }
  // function handleLChange(event) {
  //   setLname(event.target.value);
  // }
  // function changeFullName(event) {
  //   const nameOfInput = event.target.name;
  //   const newValue = event.target.value;

  //   setFullName((prevValue) => {
  //     if (nameOfInput === "fName") {
  //       return {
  //         fName: newValue,
  //         lName: prevValue.lName
  //       };
  //     } else if (nameOfInput === "lName") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: newValue
  //       };
  //     }
  //   });
  // }
  
  function handleChange(event) {
    const nameOfInput = event.target.name;
    const newValue = event.target.value;
    setContact((prevValue) => {
      if (nameOfInput === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (nameOfInput === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email
        };
      } else if (nameOfInput === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}


export default App;
