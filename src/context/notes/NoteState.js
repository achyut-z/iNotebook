import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props) => {

  const host = "http://localhost:5000"

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/notes`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZjE0YzIzOGU2YTdmMzJmYzlkOTI5In0sImlhdCI6MTY4NjEzMjQ2Nn0.ICx1vHsY4mM2dFXZwotueHebN0XSlQQrCCwsLA4tylA'
      }
    });
    const json = await response.json();
    setNotes(json)
  }

  //add note
  const addNote = async (title, description, tag) => {

    const response = await fetch(`${host}/api/notes/add-note`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZjE0YzIzOGU2YTdmMzJmYzlkOTI5In0sImlhdCI6MTY4NjEzMjQ2Nn0.ICx1vHsY4mM2dFXZwotueHebN0XSlQQrCCwsLA4tylA'
      },
      body: JSON.stringify({ title, description, tag })
    });
    
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  //update note
  const updateNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/update-note/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZjE0YzIzOGU2YTdmMzJmYzlkOTI5In0sImlhdCI6MTY4NjEzMjQ2Nn0.ICx1vHsY4mM2dFXZwotueHebN0XSlQQrCCwsLA4tylA'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)

  }

  //delete note
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/delete-note/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZjE0YzIzOGU2YTdmMzJmYzlkOTI5In0sImlhdCI6MTY4NjEzMjQ2Nn0.ICx1vHsY4mM2dFXZwotueHebN0XSlQQrCCwsLA4tylA'
      },
    });
    const json = response.json();
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote);

  }

  // const s1 = {
  //     "name": "Achyut",
  //     "city": "Ahmedabad"
  // }

  // const [state, setState] = useState(s1)

  // const update = () => {
  //     setTimeout(() => {
  //         setState({
  //             "name": "Pratik",
  //             "city": "Jamnagar"
  //         }
  //         // ,setTimeout(() => {
  //         //     setState({
  //         //         "name": "Suraj",
  //         //         "city": "Surendranagar"
  //         //     })
  //         // }, 2000)
  //         )

  //     }, 2000);
  // }

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;