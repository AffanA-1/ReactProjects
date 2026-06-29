import { useContext, createContext, use } from "react";

export const TodoContext = createContext({})



// Custom Hook for getting useContext
export const useTodo = () => {
    return useContext(TodoContext)
}


// Provider needed for Encapsulating your COmpoennets
export const Todoprovider = TodoContext.Provider


// <Todoprovider value = {{object variables}}>