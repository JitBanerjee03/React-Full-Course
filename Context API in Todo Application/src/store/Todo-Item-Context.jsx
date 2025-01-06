import { createContext } from "react";

export const TodoItemContext=createContext({
    todo:[],
    addTodoItemOnSave:()=>{},
    removeTodoItemOnDelete:()=>{}
  });