import React from "react";
import { useState } from "react";
import "./CreateNote.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
const CreateNote = (props) => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const showText = () => {
    setOpen(true);
  };

  const addNote = () => {
    setOpen(false);
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div className="createNote">
      <form action="">
        {open && (
          <input
            type="text"
            name="title"
            onChange={inputEvent}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onChange={inputEvent}
          onClick={showText}
          value={note.content}
          name="content"
          placeholder="Take a note"
          id=""
          cols="36"
          rows="1"
        />
        <Button
          onClick={addNote}
          className="addBtn"
          style={{ color: "rgb(255, 196, 0)", backgroundColor: "white" }}
        >
          <Tooltip title="Add">
            <AddIcon></AddIcon>
          </Tooltip>
        </Button>
      </form>
    </div>
  );
};
export default CreateNote;
