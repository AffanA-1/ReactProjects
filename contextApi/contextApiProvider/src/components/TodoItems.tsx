import { useState } from "react"
import { useTodo, type todoData } from "../contexts/TodoContext"

type TodoItemsProps = {
    todo: todoData
}

export const TodoItems: React.FC<TodoItemsProps> = ({todo}) => {

    // what we need in each item is: a div, inside that div we need:
    // - checkbox, inpiut, button for Edit, Button for delete

    const {updateTodo, deleteTodo, toggleCompleted} = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState<boolean>(false)
    const [inputEditData, setInputEditData] = useState<string>(todo.todoMsg || '')


    function handleEdit(){
        if(isTodoEditable){
            updateTodo(todo.id, {...todo, todoMsg: inputEditData})
            setIsTodoEditable(false)
        }
        else{
        setIsTodoEditable(true)
        }
    }


    
    return (<>
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}>

                <input type="checkbox" className="cursor-pointer" checked={todo.completed} onChange={() => toggleCompleted(todo.id)}/>

                <input type='text' className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                readOnly={!isTodoEditable}
                value={inputEditData}
                onChange={(e)=> setInputEditData(e.currentTarget.value)}
                />

                <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={handleEdit}>
                 {isTodoEditable ? "📁" : "✏️"}

                 
                 </button>

                 <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>


        </div>
        </>)
}