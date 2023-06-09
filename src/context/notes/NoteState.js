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
        'auth-token': localStorage.getItem('token')
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
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  //update note
  const updateNote = async (id, title, description, tag) => {

    const updatedTag = tag.trim() === '' ? '' : tag;

    const response = await fetch(`${host}/api/notes/update-note/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag: updatedTag })
    });
    // eslint-disable-next-line
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))


    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = updatedTag;
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
        'auth-token': localStorage.getItem('token')
      },
    });
    // eslint-disable-next-line
    const json = await response.json();
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