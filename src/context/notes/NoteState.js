import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props) => {

    const notes = [
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
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;