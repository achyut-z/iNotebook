import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import noteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {

    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { note, editNote } = props

    return (
        <div className='col-md-4'>
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className={`card-subtitle mb-2 badge rounded-pill ${note.tag ? 'text-bg-info' : 'bg-secondary'}`}  >{note.tag || 'default'}</h6>
                    <p className="card-text">{note.description}</p>
                    <div className="row">
                        <Link to="/" className="btn btn-warning col-md-3 my-1 mx-5 fa-solid fa-file-pen" onClick={() => { editNote(note) }} />
                        <Link to="/" className="btn btn-danger col-md-3 my-1 mx-5 fa-solid fa-trash-can" onClick={() => { deleteNote(note._id); props.showAlert("Deleted successfully", "success") }} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NoteItem