import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

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

  // IMPORTANT!!! If we're deriving data from previous state don't need to create new state. State should only be created when we want a re-render on changing it. 
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
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    } else {
      window.alert(`${newName} is already added to the phonebook!`)
    }
    
  }

  const formProps = {
    newName, newNumber, addToPhonebook, handleNameChange, handleNumberChange
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchString} handleSearchStringChange={handleSearchStringChange}/>
      <h3>Add a new </h3>
      <PersonForm {...formProps}/>
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App

