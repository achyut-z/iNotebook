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
    console.log(json)
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
    const json = response.json();
    console.log(json)

    console.log("Adding a note")
    const note = {
      "_id": "64808582d2481517ec145b6f3",
      "user": "647f14c238e6a7f32fc9d929",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-06-07T13:26:26.860Z",
      "__v": 0
    };
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
    console.log(json)

    console.log("updating a note")

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;

      }
    }

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
    console.log(json)

    console.log("deleting a note with id: " + id);
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