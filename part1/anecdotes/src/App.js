import React, { useState } from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ({title, anecdote}) => {
  return (
    <div>
      <h1>
          {title}
      </h1>
      <p>{anecdote}</p>
    </div>
 
  )
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0) // this is another way to get the max number of votes

  const selectRandom = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    // In this way, we can store the highest voted anecdote as a state. 
    if (copy[selected] > copy[highest]) {
      setHighest(selected)
    }
    setVotes(copy)
  }
  

  // One way to do this would be to have a function that finds the highest votes, and use that. 
  // const findMostVotes = () => {
  //   let max = 0;
  //   for (let i = 0; i < votes.length; i++) {
  //     if (votes[i] > votes[max]) {
  //       max = i
  //     }
  //   }
  //   return max
  // }

  return (
    <div>
      <Anecdote title="Anecdote of the day" anecdote={anecdotes[selected]}/>
      <p>
        has {votes[selected]} votes
      </p>
      <Button handleClick={handleVote} text="vote"/>
      <Button handleClick={selectRandom} text="next anecdote"/>
      <Anecdote title="Anecdote with most votes" anecdote={anecdotes[highest]}/>
    </div>
  )
}

export default App
