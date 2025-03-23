import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Core Concept React</h1>
      <ToDo task='Learn Ract' isDone={true} time='10'></ToDo>
      <ToDo task='Revise JS' isDone={false}></ToDo>
      <ToDo task='Take a Sawer' isDone={true} time='12'></ToDo>
      {/* <Person name='Mahir' tech="python"></Person>
      <Person name='Munna' tech="JS"></Person>
      <Player name='Tamim' run="500"></Player> */}
    </>
  )
}
function Player({ name, run }) {
  return (
    <div style={{
      border: '2px solid salmon ',
      borderRadius: '20px'
    }}>
      <h3>Name: {name}</h3>
      <p>Run: {run}</p>
    </div>
  )
}

function Person(parameter) {
  return (
    <div style={{
      padding: '20px',
      borderRadius: '20px',
      border: '2px solid green',
      marginBottom: "10px",

    }}>
      <h3>Dev: {parameter.name}</h3>
      <p>Technology: {parameter.tech}</p>
    </div>
  )
}
export default App
