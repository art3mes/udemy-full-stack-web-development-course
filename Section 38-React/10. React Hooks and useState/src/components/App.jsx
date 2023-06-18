import React, {useState} from "react";

// HOOKS
// must use hook inside a functional component

// useState()
// const state=useState(starting state,function);

// const [count, setCount]= useState(starting state, function);

// the function can be used to manage count
// to get hold onto the initial value
// state[0]
function App(){

  const [count, setCount]=useState(0);

  function inc(){
    setCount(count + 1);
  }
  function dec(){
    count===0?setCount(0):setCount(count -1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
  </div>;
}
export default App;