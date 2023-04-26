/* import { useState, useEffect } from 'react'
import Note from './Note'
import noteService from "../services/notesService"

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}
const Footer = () => {
  const fotterStyle = {
    color: "green",
    fontStyle: "italic",
    fontSyze: 16
  }
  return(
    <div style={fotterStyle}>
      <br />
      <em>Note app, departament of Computer Science ,University of Helsinski 2020</em>
    </div>
  )
}



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState("some error happened....")

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note ${note.content} was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
    }
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> 
      <ul>
        <ul>
          {notesToShow.map(note => 
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App */

 import React, { useState, useEffect } from 'react'
import axios from "axios"

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState("")

 const hook = () =>{
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
  }
  useEffect(hook, [])


const addName = (event) =>{
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber
  }
 axios
 .post("http://localhost:3001/persons", personObject)
 .then(response => {
  setPersons(persons.concat(response.data))
  setNewName("")
  setNewNumber("")
 })
  window.alert(`${newName} is already added to phonebook`)
}  
const handleDelete = (id) => {
const confirmDelete = window.confirm(`Delete ${id} ?`)
if (confirmDelete) {
  axios
  .delete(`http://localhost:3001/persons/${id}`)
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
}
}


const handlePersonChange = (event) => {
  setNewName(event.target.value)
}
const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form
      onSubmit={addName}
      >
        <div>
          name: <input 
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          number:
          <input value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map(person => 
          <li>{person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>delete</button>
           </li>
          
          )}
          
        
      </ul>
    </div>
  )
}

export default App 

