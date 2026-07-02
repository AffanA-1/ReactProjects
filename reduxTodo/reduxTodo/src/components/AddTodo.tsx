import { useState } from "react"

import { addTodo } from "../features/todo/todoSlice";
import { useAppDispatch } from "../customHooks/hooks";



export const AddTodo: React.FC = ()=>{


    const [todoData, setTodoData] = useState('')
    const dispatch = useAppDispatch();



    function handleOnSubmit(e){
        e.preventDefault()

        dispatch(addTodo(todoData))
        setTodoData('')

    }

    function handleOnChange(e){
        setTodoData(e.currentTarget.value)
    }

    return(<>

    <div>
        <form onSubmit={handleOnSubmit}>
            <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={todoData}
        onChange={handleOnChange}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
        </form>
    </div>
    
    </>)
}