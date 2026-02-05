import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] =   useState(5)
  
 // let counter = 5

  const addValue = () =>{
    console.log("clicked , counter");
    counter = counter + 1
    setCounter(counter)

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>! lets count the value</h1>
    <h2>counter value:{counter}</h2>

    <button 
    onClick={addValue}>Add value</button>
    <br></br>
    <br></br>
    <button 
    onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
