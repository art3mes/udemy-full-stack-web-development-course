import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function Card(props) {
  //props is an object
  return (
    <div>
      <h1>My Contacts</h1>
      <h2>{props.name}</h2> {/*accessing custom attributes stored in props */}
      <img src={props.imgURL} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card
      name="Beyonce" //custom attributes created using React. passed to function card() as an OBJECT
      imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+987 654 321"
      email="jack@nowhere.com"
    />
    <Card
      name="Chuck Norris"
      imgURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+918 372 574"
      email="gmail@chucknorris.com"
    />




    <App />
  </div>,
  document.getElementById("root")
);
