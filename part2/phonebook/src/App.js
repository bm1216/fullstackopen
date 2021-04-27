import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchString, setSearchString ] = useState('')

  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(searchString.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchStringChange = (event) => {
    setSearchString(event.target.value)
    console.log(event.target.value);
  }

  const addToPhonebook = (event) => {
    event.preventDefault()

    // the old fashioned way
    // for (let i = 0; i < persons.length; i++) {
    //   if (persons[i].name === newName) {
    //     isInArray = true
    //     break
    //   }
    // }

    // the new hotness
    const found = persons.findIndex(element => element.name === newName)

    if (found === -1) {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      let addedPeople = persons.concat(newPerson)
      setPersons(addedPeople)
      setNewName('')
      setNewNumber('')
    } else {
      window.alert(`${newName} is already added to the phonebook!`)
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchString} onChange={handleSearchStringChange}/>
      </div>
      <br></br>
      <h2>Add a new </h2>
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
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => 
          <li key={person.name}>{person.name}  {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App

