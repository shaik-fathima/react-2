import { useState } from 'react'
import './App.css'
import Card from './assets/component/Card'

let myobj={
  name:"fathima",
  age:30,
  address:{
    city:"kadapa",
    state:"Ap",
    contry:"india"
  }
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-slate-900 p-3'>Vite + Tailwind</h1> <br/>
   <Card username="Bushra" post="manager" />
   <Card username="jeo"/>
   <Card para="here are new  parahraph using props"/>
    </>
  )
}

export default App
