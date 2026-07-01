import { useTodo } from "../contexts/TodoContext"

export const TodoForm: React.FC = () => {

    const {addTodo} = useTodo()

    function handleOnSubmit(event: React.SubmitEvent<HTMLFormElement>){

        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const inputData = formData.get('todoInput')

        if(typeof inputData !== 'string' || !inputData.trim()) return

        addTodo({
            id: Date.now(),
            todoMsg: inputData,
            completed: false
        })

        event.currentTarget.reset()


    }
    return (<>

        <form className="flex" onSubmit={handleOnSubmit}>

            <input type="text" placeholder="Todo Todo" name="todoInput" className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"/>

            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>

        </form>


        </>)
}