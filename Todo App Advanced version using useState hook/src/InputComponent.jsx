import { useState } from "react"
import TodoItem from "./TodoItem"
import style from "./styles/InputComponent.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";

let InputComponent=({addTodoList,addTodoItemOnSave,removeTodoItemOnDelete})=>{
    
    const [newTodo,setNewTodo]=useState();
    const [newTodoDate,setNewTodoDate]=useState();

    let handleNewTodo=(event)=>{
        let newTodoItem=event.target.value;
        setNewTodo(newTodoItem);
    }

    let handleNewTodoDate=(event)=>{
        let newTodoDate=event.target.value;
        setNewTodoDate(newTodoDate);
    }
    
    return (
        <>
            <div class={`container text-center ${style.inputContainer}`}>
            <div class="row">
                <div class="col">
                    <div class="input-group input-group-lg">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter your todo"
                      onChange={handleNewTodo}
                    />
                    </div>
                </div>

                <div class="col">
                <div class="input-group input-group-lg">
                    <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                     onChange={handleNewTodoDate}
                    />
                    </div>
                </div>

                <div class="col">
                    <button type="button" class="btn btn-success" onClick={()=>addTodoItemOnSave(newTodo,newTodoDate)}><IoIosAddCircleOutline/></button>
                </div>
            </div>
            </div>

            {addTodoList.map((item)=>{
                return(
                    <TodoItem item={item.item} date={item.date} removeTodoItemOnDelete={removeTodoItemOnDelete}></TodoItem>
                )
            })}
        </>
    )
}

export default InputComponent