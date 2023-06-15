import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {

    const context = useContext(noteContext)
    const { notes, getNotes, updateNote } = context;

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const ref = useRef(null)
    const refClose = useRef(null)

    const editNote = (note) => {

        ref.current.click();
        setNote({ id: note._id, etitle: note.title, edescription: note.description, etag: note.tag });

    }

    const handleClick = (e) => {

        refClose.current.click();
        updateNote(note.id, note.etitle, note.edescription, note.etag)
        e.preventDefault();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit title</h1>
                            <button ref={refClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="mb-3 col-md-4">
                                        <label htmlFor="etitle" className="form-label">Title</label>
                                        <input type="text" className="form-control" value={note.etitle} id="etitle" name="etitle" onChange={onChange} />
                                    </div>
                                    <div className="mb-3 col-md-4">
                                        <label htmlFor="etag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" value={note.etag} id="etag" name="etag" onChange={onChange} />
                                    </div>
                                </div>
                                <div className="mb-3 col-md-8">
                                    <label htmlFor="edescription" className="form-label">Description  </label>
                                    <input type="text" className="form-control" value={note.edescription} id="edescription" name="edescription" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" onClick={handleClick} className="btn btn-primary">Update note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h1>Your notes</h1>
                {notes.length === 0 && <h4 className='my-3'>No notes to display</h4>}
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} editNote={editNote} />
                })}
            </div>
        </>
    )
}

export default Notes