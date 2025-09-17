import noteContext from '../context/notes/noteContext'
import React, {useContext} from 'react'
import Noteitem from './Noteitem';
import AddNotes from './AddNotes'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes,addNotes } = context;
    return (
        <div>
             <AddNotes />
            <div className='row my-3'>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note}/>
                })}
            </div>
        </div>
    )
}

export default Notes
