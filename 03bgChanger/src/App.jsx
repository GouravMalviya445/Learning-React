import { useState } from "react"

function App() {
  const [color, setColor] = useState("#222")
  return (
    <>
      <main className='h-screen flex items-center justify-center w-full relative' style={{ backgroundColor: color }}>
        <button onClick={() => setColor("#222")} className="text-black rounded-full py-1 px-3 bg-white">Default</button>
        <div className="absolute rounded-full text-white font-bold flex flex-wrap p-5 justify-between items-center left-1/2 bottom-12 bg-white -translate-x-1/2 w-10/12 h-16">
          <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }} className="px-5 py-1 rounded-2xl">red</button>
          <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }} className="px-5 py-1 rounded-2xl">blue</button>
          <button onClick={() => setColor("green")} style={{ backgroundColor: "green" }} className="px-5 py-1 rounded-2xl">green</button>
          <button onClick={() => setColor("fuchsia")} style={{ backgroundColor: "fuchsia" }} className="px-5 py-1 rounded-2xl">fuchsia</button>
          <button onClick={() => setColor("salmon")} style={{ backgroundColor: "salmon" }} className="px-5 py-1 rounded-2xl">salmon</button>
          <button onClick={() => setColor("yellowGreen")} style={{ backgroundColor: "yellowGreen" }} className="px-5 py-1 rounded-2xl">yellow-green</button>
          <button onClick={() => setColor("orange")} style={{ backgroundColor: "orange" }} className="px-5 py-1 rounded-2xl">orange</button>
          <button onClick={() => setColor("cyan")} style={{ backgroundColor: "cyan" }} className="px-5 py-1 rounded-2xl">cyan</button>
          <button onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }} className="px-5 py-1 rounded-2xl">purple</button>
          <button onClick={() => setColor("orangeRed")} style={{ backgroundColor: "orangeRed" }} className="px-5 py-1 rounded-2xl">orange-red</button>
        </div>
      </main>
    </>
  )
}

export default App
