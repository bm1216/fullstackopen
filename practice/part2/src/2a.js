import React from 'react'
import Note from './components/Note'

const App = ({notes}) => {
  // const { notes } = props  dont need to do this as we are only using notes from props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>
    </div>
  )
}

export default App