import React from 'react'

const PersonForm = ({addToPhonebook, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
      <form onSubmit={addToPhonebook}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input type="tel" value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm