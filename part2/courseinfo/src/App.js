import React from 'react'


const Header = ({course}) => <div><h2>{course.name}</h2></div>

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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => 
        <Course key={course.id} course={course} />
      )}
    </div>
  ) 
}

// Trying to abstract away as much as possible

export default App