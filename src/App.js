import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("add button is clicked");
    setAddItem((preval) => {
      return [...preval, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, index) => {
        return index !== id;
      })
    );
  };
  return (
    <div>
      <Header></Header>
      <hr></hr>
      <CreateNote passNote={addNote}></CreateNote>
      <div className="note">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
