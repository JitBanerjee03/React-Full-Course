import TodoRow from "./TodoRow";

let TodoList=({TodoArray})=>{
    return(
        <>
           {TodoArray.map((todoRow)=>{
            return (
                <TodoRow TodoJob={todoRow.TodoItem} TodoDate={todoRow.TodoDate}></TodoRow>
            )
           })}
        </>
    )
}

export default TodoList;