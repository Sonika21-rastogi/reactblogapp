import React, { useState } from 'react';
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  // useEffect(() => {
  //   getNotes(); // fetch notes once when component mounts
  // }, []);

  // Get All Notes
  const getNotes = async () => {
    console.log("Saved Token:", localStorage.getItem("token"));
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });

    const json = await response.json();
    console.log("Notes Response:", json);
    if (Array.isArray(json)) {
      setNotes(json);
    } else {
      setNotes([]);
    }
  };

  // Add Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const newNote = await response.json();
    setNotes(notes.concat(newNote));
  }

  // Delete Note
  const deleteNote = async (id) => {

  await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log("Update Response:", json);

    // Update locally
    const updatedNotes = notes.map((note) =>
      note._id === id ? { ...note, title, description, tag } : note
    );
    setNotes(updatedNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
