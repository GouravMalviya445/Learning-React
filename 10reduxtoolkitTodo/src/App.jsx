import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <div className="bg-[#888] text-center h-screen">
      <h1>Learn About Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
