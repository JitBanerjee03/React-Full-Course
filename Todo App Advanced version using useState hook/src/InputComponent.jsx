import { useRef } from "react"
import TodoItem from "./TodoItem"
import style from "./styles/InputComponent.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";

let InputComponent=({addTodoList,addTodoItemOnSave,removeTodoItemOnDelete})=>{
    
    
    let newTodoItem=useRef("");
    let todoDate=useRef("");
    
    let onSubmitUpdateFun=(event)=>{
        event.preventDefault();
        console.log(event);
        let item=newTodoItem.current.value;
        let date=todoDate.current.value;
        newTodoItem.current.value="";
        todoDate.current.value="";
        addTodoItemOnSave(item,date);
    }

    return (
        <>
            <div class={`container text-center ${style.inputContainer}`}>
            <form action="" class="row" onSubmit={(event)=>onSubmitUpdateFun(event)}>
                <div class="col">
                    <div class="input-group input-group-lg">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter your todo"
                        ref={newTodoItem}
                    />
                    </div>
                </div>

                <div class="col">
                <div class="input-group input-group-lg">
                    <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                        ref={todoDate}
                    />
                    </div>
                </div>

                <div class="col">
                    <button class="btn btn-success"><IoIosAddCircleOutline/></button>
                </div>
            </form>
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