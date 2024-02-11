import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 px-10 py-2 rounded-full'>helo</h1>
      <Card username="GouravMalviya445" button = "Take Me"/>
      <Card username="RadheyShyam"/>
    </>
  )
}

export default App
