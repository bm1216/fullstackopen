import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react';

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So, you were probably born in {bornYear()}</p>
    </div>
  )
}

const Props = () => {
  const name = "Peter"
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Barun" age={13+10} />
      <Hello name={name} age={age}/>
    </>
  )
}

export default Props;
