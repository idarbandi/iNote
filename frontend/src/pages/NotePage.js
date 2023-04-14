import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useNavigate } from 'react-router-dom';


export const NotePage = ( match ) => {

  let noteId = useParams();
  let [note, setNote] = useState(null)
  let history = useNavigate();

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
      if (noteId === "new") return 
      let response = await fetch(`/api/notes/${noteId.id}`)
      let data = await response.json()
      setNote(data)
  }

  let updateNote = async () => {
    let response = await fetch(`/api/notes/${noteId.id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    })
    let data = await response.json()
    setNote(data)
  }

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify(note)
    })
  }
  
  let deleteNote = async () => {
    let response = await fetch(`/api/notes/${noteId.id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    history("/")
  }
  

  let handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote()
    } else if (noteId !== "new") {
      updateNote()
    } else if (noteId !== "new" && note !== null) {
      createNote()
    }
  }

  

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>

          <ArrowLeft onClick={handleSubmit}/>

          
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : <button>Done</button>}
      </div>
      <textarea onChange={(e) => { setNote({ ...note, "body": e.target.value }) }} defaultValue={note && note.body}></textarea>
    </div>
  )
}
