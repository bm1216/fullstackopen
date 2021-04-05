import './App.css';
import React, {useState}from 'react';

const Addition = () => {
  const date = new Date()
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [sum, setSum] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  console.log(showInfo)
  return (
    <div>
      <p>Hello World! The date is {date.toString()}</p>
      <form id="add">
        <input type="number" onChange={e => {setA(e.target.value)}}></input> <br></br>
        <input type="number" onChange={e => {setB(e.target.value)}}></input> <br></br>
        <input type="submit" value="add" onClick={e => {e.preventDefault(); setSum(parseInt(a)+parseInt(b)); setShowInfo(true)}}></input>
      </form>
      {showInfo && <p> The sum is {sum} </p> }
    </div> 
  )
}    

// Using round brackets mean that you don't need to have a return

export default Addition;
