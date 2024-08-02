import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=13
  let[counter,setCounter]=useState(15)

  const addvalue=()=>{
    //console.log("clicked",counter)
    if(counter<20){
      setCounter(counter+1)
    }
    else{
      setCounter(counter) 
    }
    //counter=counter+1
  }

  const removevalue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter)
    }
    //setCounter(counter-1)
  }
  

  return (
    <>
      <h1> Count Game</h1>
      <h3>Counter Value {counter}</h3>
      <button
      onClick={addvalue}>Add Value</button>
      <br/>
      <button
      onClick={removevalue}>Decrease Value</button>
    </>  
  )
}

export default App
