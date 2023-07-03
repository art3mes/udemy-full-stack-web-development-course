import React, {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event) {
        const {name, value} = event.target;

        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        });
    }
    function addNote(event) {
        if(note.title!==""){
            props.onAdd(note);
        }
        setNote({title: "", content: ""});
        event.preventDefault();
    }
    return (
        <div>
            <form className="create-note">
                <input
                    onChange={handleChange}
                    value={note.title}
                    name="title"
                    placeholder="Title"/>
                <textarea
                    onChange={handleChange}
                    value={note.content}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"/>
                <Zoom in={true}>
                    <Fab onClick={addNote}><AddCircleOutlineIcon/></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
