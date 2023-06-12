import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {

    const context = useContext(noteContext)
    const { notes, addNote } = context;

    return (
        <>
            <AddNote />

            <div className='row my-3'>
                <h1>Your notes</h1>
                {notes.map((note) => {
                    return <NoteItem note={note} />
                })}
            </div>
        </>
    )
}

export default Notes