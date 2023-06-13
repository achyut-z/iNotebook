import React, { useContext, useEffect, useRef } from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {

    const context = useContext(noteContext)
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)

    const editNote = (note) => {

        ref.current.click();

    }


    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h1>Your notes</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} editNote={editNote} />
                })}
            </div>
        </>
    )
}

export default Notes