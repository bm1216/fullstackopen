import React from 'react'


const Header = ({course}) => <><h1>{course}</h1></>

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return(
    <>
        <Part part={part1} numExercises={exercises1}/>
        <Part part={part2} numExercises={exercises2}/>
        <Part part={part3} numExercises={exercises3}/>
    </>
  )
}

const Part = ({part, numExercises}) => <p> {part} {numExercises} </p>


const Total = ({total}) => <><p>Number of exercises {total}</p></>


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const exerciseProps = {
    part1, exercises1, part2, exercises2, part3, exercises3
  }

  return (
    <div>
      <Header course={course}/>
      <Content {...exerciseProps}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App