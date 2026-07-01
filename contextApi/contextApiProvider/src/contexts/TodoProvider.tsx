import { useEffect, useState } from "react"
import { TodoContext, type todoData } from "./TodoContext"


// FC is functional Component
export const TodoProvider: React.FC<{children: React.ReactNode}> = (({children}) => {


    // Clear your local storage - if it causes any error.
    // localStorage.clear()


    const [todos, setTodos] = useState<todoData[]>([])

    const addTodo = (todo) => {
        setTodos(prev => [...prev, todo])
    }

    const updateTodo = (id, todo) => {
        setTodos(prev => prev.map(todoElement => todoElement.id === id ? todo : todoElement))
    }

    const deleteTodo = (id) => {
        setTodos(prev => (prev.filter(todoElement => todoElement.id !== id)))
    }

    const toggleCompleted = (id) => {
        setTodos(prev => (prev.map(todoElement => todoElement.id === id ? {...todoElement, completed: !todoElement.completed} : todoElement )))
    }

    useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length){
      setTodos(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

    const value = {todos, addTodo, updateTodo, setTodos, deleteTodo, toggleCompleted}



    return (<TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>

    )
})