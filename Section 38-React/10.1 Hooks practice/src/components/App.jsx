import React, { useState } from "react";

function App() {
  const [stateTime, updateTime] = useState("TIME");

  function timeChange() {
    updateTime(new Date().toLocaleTimeString());
    setInterval(timeChange, 1000);
  }

  return (
    <div className="container">
      <h1>{stateTime}</h1>
      <button onClick={timeChange}>Get Time</button>
    </div>
  );
}

export default App;
