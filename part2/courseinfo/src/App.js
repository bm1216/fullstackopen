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


// const Total = ({parts}) => {
//   const total = parts.reduce((acc, value) => acc+value, 0)
//   console.log(total)
//   return (
//     <><p>Number of exercises {total}</p></>
//   )
// }

const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      {/* <Total parts={course.parts.map(x => x.exercises)}/>   */}
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
      }
    ]
  }

  return <Course course={course} />
}

// Trying to abstract away as much as possible

export default App