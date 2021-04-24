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

export default Course