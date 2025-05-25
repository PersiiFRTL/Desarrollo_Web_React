import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [part1, part2, part3];
  return (
    <div>
      <Header course={course} />
      <Content parts = {parts}/>
      <Total parts={parts} />
    </div>
  )
}
 const Header = (props) => {
  console.log('HEADER', props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
  <>
        <Part part = {props.parts[0]} />
        <Part part = {props.parts[1]} />
        <Part part = {props.parts[2]} />
  </>
  )
}

const Part = (props) => {
  return (<p> {props.part.name} : {props.part.exercises}</p> )
}

const Total = (props) => {
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;

  return (
    <div>
      <p>Number of exercises: {total}</p>
    </div>
  );
};

export default App