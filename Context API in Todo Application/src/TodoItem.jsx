import { useContext } from 'react';
import { TodoItemContext } from './store/Todo-Item-Context';
import style from './styles/TodoItem.module.css'
import { MdDelete } from "react-icons/md";
let TodoItem=({item,date})=>{
    
    const {removeTodoItemOnDelete}=useContext(TodoItemContext)

    return (
        <>
            <div className={`container text-center ${style.outerContainer}`}>
            <div class="row">
                <div className={`col ${style.todoItem}`}>
                <h4>{item}</h4>
                </div>
                <div className={`col ${style.todoItem}`}>
                <h4>{date}</h4>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-danger" 
                     onClick={(item,date)=>removeTodoItemOnDelete(item,date)}
                    ><MdDelete/></button>
                </div>
            </div>
            </div>
        </>
    )
}

export default TodoItem;