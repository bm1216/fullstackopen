import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initalNotes => {
        console.log('promise fulfilled');
        setNotes(initalNotes)
      })
  }, [])
  
  // console.log('render', notes.length, 'notes');

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target);;
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5
    }
    console.log(noteObject);
    // setNotes(notes.concat(noteObject)) 
    // setNewNote('')
    noteService
      .create(noteObject)
      .then(returnedNote => {
        console.log(returnedNote);
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    // THIS replaces the entire NOTE with the new NOTE using a PUT request.
    // We can also just change some of the notes properties using a HTTP PATCH request
    noteService 
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from the server`
        )
        // Remove the already deleted note from the local state
        setNotes(notes.filter(n => n.id !== id))
      })

    console.log(`importance of ${id} needs to be toggled`);
  }

  const handleNoteChange = (event) => {
    // don't need to prevent default here because 
    console.log(event.target);
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App