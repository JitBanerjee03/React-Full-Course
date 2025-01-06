import { useState } from "react"
import InputComponent from "./InputComponent"
import OuterComponent from "./OuterComponent"
import {TodoItemContext} from "./store/Todo-Item-Context";

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
      <TodoItemContext.Provider value={{
        todo:todo,
        addTodoItemOnSave:addTodoItemOnSave,
        removeTodoItemOnDelete:removeTodoItemOnDelete
      }}>
        <center>
            <OuterComponent>
              <h1>Todo App</h1>
              <InputComponent></InputComponent>
            </OuterComponent>
          </center>
      </TodoItemContext.Provider>
    </>
  )
}

export default App
