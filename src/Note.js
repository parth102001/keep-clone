import React from "react";
import "./Note.css";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Tooltip from "@material-ui/core/Tooltip";
const Note = (props) => {
  const deleteEvent = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className="note">
      <div className="note-container">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <Button
          onClick={deleteEvent}
          className="deleteIcon"
          style={{ color: "gold", backgroundColor: "white" }}
        >
          <Tooltip title="Delete">
            <DeleteOutlineIcon classname="deleteLogo" />
          </Tooltip>
        </Button>
      </div>
    </div>
  );
};

export default Note;
