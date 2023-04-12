import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";


export const NotePage = ( match ) => {

  let noteId = useParams();
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
      let response = await fetch(`/api/notes/${noteId.id}`)
      let data = await response.json()
      setNote(data)
  }

  return (
    <div>
      <p>{note && note.body}</p>
    </div>
  )
}
