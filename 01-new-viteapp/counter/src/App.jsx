import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter , setcounter]= useState(0)

  const addValue = ()=> {
    setcounter((prevcounter)=>{prevcounter + 1})
    setcounter(counter + 1)
  }

  const removeValue = ()=> {
    setcounter(counter - 1)
  }
 // let counter = 15

 // const addValue = () => {        its works on console
   // counter = (counter + 1)
  //  console.log(counter);
 // }

  return (
    <div>
      <h1> Bushra Fathima</h1>
      <h2>counter value { counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer : {counter}</p>
  </div>
  )
}

export default App
