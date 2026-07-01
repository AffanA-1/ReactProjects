import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  // Setup for Provider
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prev => [...prev, todo])
  }

  const updateTodo = (id, todo) => {
    // WRONGGGGGG!!!!!
    // setTodos(prev => (prev.filter(todoElement => todoElement.id === id).map(foundElement => ({...foundElement, todoMsg: todoMsg}))))
    // Filter is used to create a new array itself, it will mess up the ordering
    //  it will delete all other todos from your list

    setTodos(prev => (prev.map(todoElement => todoElement.id === id ? todo : todoElement)))

  }

  const deleteTodo = (id) => {
    setTodos(prev => (prev.filter(todoElement => todoElement.id !== id)))
  }

  const toggleCompleted = (id) => {
    setTodos(prev => (prev.map(todoElement => todoElement.id === id ? {...todoElement, completed: !todoElement.completed} : todoElement)))
  }


  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length){
      setTodos(todos)
    }
  }, [])


  useEffect(()=>{

    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])

  return (
   <>
   <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos && todos.map(todoElement => <TodoItem todo={todoElement}/>)}
                    </div>
                </div>
            </div>

            </TodoProvider>
            </>
  )
}

export default App
