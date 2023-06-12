import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "648084d82481517ec145b6df",
          "user": "647f14c238e6a7f32fc9d929",
          "title": "Wake up updated",
          "description": "Wake up early tomorrow updated",
          "tag": "daily routine",
          "date": "2023-06-07T13:23:36.687Z",
          "__v": 0
        },
        {
          "_id": "648085822481517ec145b6f3",
          "user": "647f14c238e6a7f32fc9d929",
          "title": "Wake up updated 2",
          "description": "Wake up early tomorrow updated 2",
          "tag": "daily routine",
          "date": "2023-06-07T13:26:26.860Z",
          "__v": 0
        },
        {
          "_id": "648084d82481517ec145b6df",
          "user": "647f14c238e6a7f32fc9d929",
          "title": "Wake up updated",
          "description": "Wake up early tomorrow updated",
          "tag": "daily routine",
          "date": "2023-06-07T13:23:36.687Z",
          "__v": 0
        },
        {
          "_id": "648085822481517ec145b6f3",
          "user": "647f14c238e6a7f32fc9d929",
          "title": "Wake up updated 2",
          "description": "Wake up early tomorrow updated 2",
          "tag": "daily routine",
          "date": "2023-06-07T13:26:26.860Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

      //add note
      const addNote = (title,description,tag) => {

        console.log("Adding a note")
        const note = {
          "_id": "648085822481517ec145b6f3",
          "user": "647f14c238e6a7f32fc9d929",
          "title": "Wake up updated 2 ADDED",
          "description": "Wake up early tomorrow updated 2 ADDED",
          "tag": "daily routine ADDED",
          "date": "2023-06-07T13:26:26.860Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      //update note
      const updateNote = () => {

      }

      //delete note
      const deleteNote = () => {

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
        <NoteContext.Provider value={{notes, addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;