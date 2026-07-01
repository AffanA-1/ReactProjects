import { createContext, useContext } from "react";

export type todoData = {id: number, todoMsg: string, completed: boolean}

type todoContext = {
    todos: todoData[],
    addTodo: (todo: todoData) => void,
    updateTodo: (id: number, todo:todoData)=> void,
    deleteTodo: (id: number) => void,
    toggleCompleted: (id: number) => void

}

export const TodoContext = createContext<todoContext | undefined>(undefined)

export const useTodo = () => {
    const context = useContext(TodoContext)

    if(!context){
        console.log('UseTodo is not defined yet. Check the providers');
    } 
    return context
}