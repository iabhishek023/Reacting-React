import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>TailWind Test</h1>
      <Card user="Ye Dil Bhi Kitna Pagal hai"  btntxt="Visit Me"
      img="https://cdn.pixabay.com/photo/2017/03/28/12/14/chairs-2181972_1280.jpg"/>
      <Card user="Ye pyaar to tumse krta h" btntxt="Love Me"
      img="https://cdn.pixabay.com/photo/2017/03/27/15/09/waterfall-2179296_640.jpg"/>
      
    </>
  )
}

export default App
