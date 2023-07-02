import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  function addNote(event) {
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNote}><AddCircleOutlineIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
