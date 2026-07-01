import { useContext, createContext } from "react";

// IMPORTANT: Step 1 and 2 are done here

export type TodoData = {
    id: number,
    todoMsg: string,
    completed: boolean
}

export type contextData = {
    todos: TodoData[],
    addTodo: (todo: TodoData) => void,
    updateTodo: (id: number, todo: TodoData) => void,
    deleteTodo: (id: number) => void,
    toggleCompleted: (id: number) => void
}

export const TodoContext = createContext<contextData>(
    // instead of having a seperate provider function for these, we will do this over here
    {todos: [{
        id: 1,
        todoMsg: "Todo msg",
        completed: false,
    }],
    addTodo: (todo)=> {},
    updateTodo: (id, todo)=> {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
    }
)


export type trial = typeof TodoContext


// Custom Hook for getting useContext
export const useTodo = () => {
    return useContext(TodoContext)
}


// Provider needed for Encapsulating your COmpoennets
export const TodoProvider = TodoContext.Provider


// <Todoprovider value = {{object variables}}>