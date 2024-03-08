import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('#e9967a')

  return (
    <>
    <div className='w-screen h-screen duration-200 ' style={{background:color}}>
      <div  className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         <div className='flex flex-wrap gap-5 shadow-lg bg-black px-3 py-2 rounded-3xl'>


    <button onClick={()=> setcolor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ background:'red'}}>Red</button>
    <button onClick={()=> setcolor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ background:'green'}}>Green</button>
    <button onClick={()=> setcolor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ background:'yellow'}}>Yellow</button>
    <button onClick={()=> setcolor('teal')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ background:'teal'}}>teal</button>
    <button onClick={()=> setcolor('sandybrown')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ background:'sandybrown'}}>sandybrown</button>



        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
