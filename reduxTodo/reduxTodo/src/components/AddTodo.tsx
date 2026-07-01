import { useState } from "react"

import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";


export const AddTodo: React.FC = ()=>{


    const [todoData, setTodoData] = useState('')
    const dispatch = useDispatch();



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
            <input type="text" value={todoData} onChange={handleOnChange}/>
            <button type="submit">Add</button>
        </form>
    </div>
    
    </>)
}