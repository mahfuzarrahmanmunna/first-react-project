import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      <Person name='Mahir' tech="python"></Person>
      <Person name='Munna' tech="JS"></Person>
    </>
  )
}
function Person(parameter) {
  return (
    <div style={{
      padding: '20px',
      borderRadius: '20px',
      border: '2px solid green',
      margin: "10px",

    }}>
      <h3>Dev: {parameter.name}</h3>
      <p>Technology: {parameter.tech}</p>
    </div>
  )
}
export default App
