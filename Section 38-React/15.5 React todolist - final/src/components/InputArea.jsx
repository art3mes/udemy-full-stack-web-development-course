import React from "react";

function InputArea(props){
    return (
        <div className="form">
        <input type="text" onChange={props.changeHandler} value={props.item} />
        <button onClick={props.handleButton}>
          <span>Add</span>
        </button>
      </div>
    );
}
export default InputArea;