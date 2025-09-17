import React, { useState } from 'react';
import NoteContext from "./noteContext";


const NoteState = (props) => {

  const noteInitial = [
    {
      "_id": "68b02e406c9037ac652b250e",
      "user": "68b01a7370bb9ce071fd456a",
      "title": "qAdd your name in the body",
      "description": "wake sid up",
      "tag": "personels",
      "date": "1756376640631",
      "__v": 0
    },
    {
      "_id": "68ca9b3568b0b425da0dd3e0",
      "user": "68b01a7370bb9ce071fd456a",
      "title": "hello is my new notes dollo",
      "description": "helloo do hard works",
      "tag": " hello msssotivations",
      "date": "1758108469466",
      "__v": 0
    },
    {
      "_id": "68ca9b6268b0b425da0dd3e3",
      "user": "68b01a7370bb9ce071fd456a",
      "title": "hobby",
      "description": "Dance",
      "tag": "Solo",
      "date": "1758108514590",
      "__v": 0
    }
  ]


  const [notes, setNotes] = useState(noteInitial);

  // Add Notes
  const addNote = (title, description, tag) => {
    // TODO: API call
  note=  {
      "_id": "68ca9b6268b0b425da0dd3e3",
      "user": "68b01a7370bb9ce071fd456b",
      "title": "My Title Added",
      "description": "Dance [Added]",
      "tag": "Solo",
      "date": "1758108514590",
      "__v": 0
    }

    setNotes(notes.push(note));
  }
  // Delete  a Notes

  const deleteNote = () => {

  }
  // Edit a NOtes
  const editNote = () => {

  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
