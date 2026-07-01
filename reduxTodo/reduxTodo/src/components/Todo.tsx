import { useSelector } from "react-redux"

export const Todo: React.FC = () => {

    const todos = useSelector(state => state.todos)
    
    
    
    return (<>
        <div>Todo Llisting here and buttons for removoing the data
            {todos && todos.map(todo => (<li key={todo.id}>{todo.text}</li>))}
        </div>
    </>)
}