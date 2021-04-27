import './App.css';
import React, {useState}from 'react';

const Addition = () => {
  const date = new Date()
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [sum, setSum] = useState(undefined)

  const [showInfo, setShowInfo] = useState(false)

  const calculateSum = (event) => {
    event.preventDefault()
    setSum(parseInt(first)+parseInt(second))
    setShowInfo(true)
  }

  const getFirst = (event) => {
    setFirst(event.target.value)
  }

  const getSecond = (event) => {
    setSecond(event.target.value)
  }


  console.log(showInfo)
  return (
    <div>
      <p>Hello World! The date is {date.toString()}</p>
      <form id="add" onSubmit={calculateSum}>
        <input type="number" onChange={getFirst} value={first}></input> <br></br>
        <input type="number" onChange={getSecond} value={second}></input> <br></br>
        <input type="submit" value="add"></input>
      </form>
      {showInfo && <p> The sum is {sum} </p> }
    </div> 
  )
}    

// Using round brackets mean that you don't need to have a return

export default Addition;
