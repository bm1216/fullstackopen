import React, {useState} from 'react'

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter+1)

  const reset = () => setCounter(0)

  console.log('rendering....', counter)

  return (
    <div>
      {counter}
      <br/>
      <button onClick={increaseByOne}> plus </button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App