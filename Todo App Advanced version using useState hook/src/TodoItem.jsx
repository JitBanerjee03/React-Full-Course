import style from './styles/TodoItem.module.css'

let TodoItem=({item,date,removeTodoItemOnDelete})=>{
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
                    >Remove</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default TodoItem;