import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import phoneService from './services/Phonebook'
import Message from './components/Message'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchString, setSearchString ] = useState('')
  const [ operationMessage, setOperationMessage ] = useState(null)

  useEffect(() => {
    phoneService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })    
  }, [])

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
  }

  const deleteFromPhonebook = (id) => {
    phoneService
      .deleteEntry(id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== id))
      })
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
      phoneService
        .createEntry(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setOperationMessage({content: `Added ${returnedPerson.name}`, isError: false})
          setTimeout(() => {
            setOperationMessage(null)
          }, 3000)
          setNewName('')
          setNewNumber('')
        })
    } else {
      if (window.confirm(`${newName} is already defined in the phonebook, replace the old number with a new one?`)) {
        const newPerson = {
          ...persons[found],
          number: newNumber,
        }
        phoneService
          .updateEntry(newPerson.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== newPerson.id ? p : returnedPerson))
            setOperationMessage({content: `Updated ${returnedPerson.name}`, isError: false})
            setTimeout(() => {
              setOperationMessage(null)
            }, 3000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setOperationMessage({content: `Information of ${newPerson.name} has already been removed from the server.`, isError: true})
            setTimeout(() => {
              setOperationMessage(null)
            }, 3000)
            setNewName('')
            setNewNumber('')
            setPersons(persons.filter(p => p.id !== newPerson.id))
            console.log(error);
          })
      } else {
        return null
      } 
    }
    
  }

  const formProps = {
    newName, newNumber, addToPhonebook, handleNameChange, handleNumberChange
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={operationMessage}/>
      <Filter searchString={searchString} handleSearchStringChange={handleSearchStringChange}/>
      <h3>Add a new </h3>
      <PersonForm {...formProps}/>
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleDelete={deleteFromPhonebook}/>
    </div>
  )
}

export default App

