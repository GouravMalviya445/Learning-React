import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
    
  // let counter = 5;

  const addValue = (e) => {
    setCounter(counter+1)
    if(counter === 20){
      counter = 20;
      setCounter(counter);
    }
  }

  const removeValue = (e) => {
    setCounter(counter-1)
    if(counter === 0){
      counter = 0;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Jay shree Ram..!</h1>
      <h3>Counter Value: {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
