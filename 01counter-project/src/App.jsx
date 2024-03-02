import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] = useState(18);
    const addValue = () => {
        if (counter === 20) return
        setCounter(counter + 1)
    }

    const removeValue = () => {
        if (counter <= 0) return
        setCounter(counter - 1)
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