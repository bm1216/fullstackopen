import React from 'react'


const Header = ({course}) => <><h1>{course}</h1></>

const Content = ({parts}) => {
  return(
    <>
      {
        parts.map((part, index) => 
          <Part key={index} part={part.name} numExercises={part.exercises}/>
        )
      }
    </>
  )
 
}

const Part = ({part, numExercises}) => <p> {part} {numExercises} </p>


const Total = ({parts}) => {
  const total = parts.reduce((acc, value) => acc+value, 0)
  console.log(total)
  return (
    <><p>Number of exercises {total}</p></>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts.map(x => x.exercises)}/>
    </div>
  )
}

export default App