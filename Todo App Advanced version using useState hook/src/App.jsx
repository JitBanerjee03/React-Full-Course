import { useState } from "react"
import InputComponent from "./InputComponent"
import OuterComponent from "./OuterComponent"
import TodoItem from "./TodoItem"

function App() {
  
  const [todo,setTodo]=useState([]);

  let addTodoItemOnSave=async(newTodo,newTodoDate)=>{
    let newTodoRow=[...todo];

    newTodoRow.push({
      item:newTodo,
      date:newTodoDate
    })
    console.log(newTodo);
    console.log(newTodoDate);
    setTodo(newTodoRow);
  }
  
  let removeTodoItemOnDelete=(item,date)=>{
    let newTodoRow=[...todo];

    const index=newTodoRow.indexOf((todoItem)=>{
      return todoItem.item===item && todoItem.date===date;
    })

    newTodoRow.splice(index,1);

    setTodo(newTodoRow);
  }

  return (
    <>
      <center>
        <OuterComponent>
          <h1>Todo App</h1>
          <InputComponent addTodoList={todo} addTodoItemOnSave={addTodoItemOnSave} removeTodoItemOnDelete={removeTodoItemOnDelete}></InputComponent>
        </OuterComponent>
      </center>
    </>
  )
}

export default App
