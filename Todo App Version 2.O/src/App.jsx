import TodoFormat from "./TodoFormat"
import TodoList from "./TodoList"
import './App.css'

function App() {
  let TodoArr=[
    {
      TodoItem:"Buy Milk",
      TodoDate:"4/10/2024"
    },

    {
      TodoItem:"Go to College",
      TodoDate:"4/10/2024"
    }
  ]
  return (
    <>
      <center>
        <h1>Todo App</h1>
        <TodoFormat></TodoFormat>
        <TodoList TodoArray={TodoArr}></TodoList>
      </center>
    </>
  )
}

export default App
