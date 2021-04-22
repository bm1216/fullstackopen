import React, { useState } from 'react'

const FeedBack = (props) => {
  return (
    <div>
      <Header text="give feedback"/>
      <FeedbackOptions {...props}/>
    </div>
     )
}

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )  
}

const FeedbackOptions = (props) => {
  return (
    <div>
      <Button text="good" handleClick={props.handleGood}/>
      <Button text="neutral" handleClick={props.handleNeutral}/>
      <Button text="bad" handleClick={props.handleBad}/> 
    </div>
    
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const Statistics = (props) => {
  return (
    <div>
      <Header text="statistics"/>
      <FeedbackStatistics {...props} />
    </div>
   )
}

const FeedbackStatistics = (props) => {
  const average = () => {
    return (props.good*1 + props.bad*-1 + props.neutral*0) /3
  }
  
  const percentageOfPositive = () => {
    return (props.good/(props.good + props.bad + props.neutral)) * 100
  }

  if (props.allFeedback.length === 0) {
    return (
      <div>
        <p> No feedback given </p>
      </div>
    )
  } else {
    return(
      <div>
        <Stat text="good" count={props.good}/>
        <Stat text="neutral" count={props.neutral}/>
        <Stat text="bad" count={props.bad}/>
        <Stat text="average" count={average()}/>
        <Stat text="positive" count={percentageOfPositive()}/>
      </div>
    )
  }

}

const Stat = ({text, count}) => <p>{text}  {count}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState([])

  const handleGood = () => {
    setGood(good + 1)
    setAllFeedback(allFeedback.concat(1))
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAllFeedback(allFeedback.concat(-1))
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAllFeedback(allFeedback.concat(0))
  }

  const handlers = {
    handleGood,
    handleBad,
    handleNeutral
  }

  return (
    <div>
      <FeedBack {...handlers}/>
      <Statistics good={good} bad={bad} neutral={neutral} allFeedback={allFeedback}/>
    </div>
  )
}

export default App
