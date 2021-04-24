import React from 'react'


const Header = ({course}) => <><h1>{course.name}</h1></>

const Content = ({course}) => {
  return(
    <div>
      {
        course.parts.map((part) => 
          <Part key={part.id} name={part.name} numExercises={part.exercises}/>
        )
      }
    </div>
  )
 
}

const Part = ({name, numExercises}) => <p> {name} {numExercises} </p>


const Total = ({course}) => {
  const total = course.parts.reduce((acc, value) => acc+value.exercises, 0)
  return (
    <div>
      <p><b>Total of {total} exercises</b></p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>  
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

// Trying to abstract away as much as possible

export default App