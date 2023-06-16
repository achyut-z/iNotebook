import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = () => {

    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleSubmit = (e) => {

        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (

        <div className="container my-3">
            <h1>Add a note</h1>
            <form  onSubmit={handleSubmit}>
                <div className="row">
                    <div className="mb-3 col-md-4">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                    </div>
                </div>
                <div className="mb-3 col-md-8">
                    <label htmlFor="description" className="form-label">Description  </label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddNote