import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 1
  // const addValue = () => {
  //   counter = counter + 1;
  //   console.log(counter)
  // }

  let [counter, setCounter] = useState(18);
  const addValue = () => {
    counter += 1;
    setCounter(counter);
  }

  const removeValue = () => {
    counter -= 1;
    setCounter(counter)
  }

  return (
    <>
    <h1>Why we use Hooks | Counter Project</h1>
    <p>Counter Value: {counter}</p>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
