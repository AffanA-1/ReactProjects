import { useEffect } from 'react'
import './App.css'
import { TodoForm, TodoItems } from './components'
import { useTodo } from './contexts/TodoContext'
import { TodoProvider } from './contexts/TodoProvider'

function App() {

  const {todos} = useTodo()


  

  return (
    <>
      <div className='bg-black min-h-screen py-8'>

        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>


          <div className='mb-4'>
            <TodoForm></TodoForm>
          </div>

          <div >
            {todos && todos.map(todo => <TodoItems todo={todo}/>)}
          </div>

        </div>

      </div>


      
    </>
  )
}

export default App
