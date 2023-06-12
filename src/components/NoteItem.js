import React from 'react'

const NoteItem = (props) => {

    const { note } = props

    return (
        <div className='col-md-4'>
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 badge rounded-pill bg-danger">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                    <div className="row">
                        <a href="/" className="btn btn-warning col-md-3 my-1 mx-5 fa-solid fa-file-pen"></a>
                        <a href="/" className="btn btn-danger col-md-3 my-1 mx-5 fa-solid fa-trash-can"></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NoteItem