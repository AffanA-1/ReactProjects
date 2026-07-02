import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

type todoType = {
    id: string,
    text: string
}

export type state = {
    todos: todoType[]
}

const initialState: state = {
    todos: []
}




export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // PayloadAction is String because we are only sending todoMsg which is a string
        // if we were sending a complex object instead, then we'd have to make a Type ALias and then fetch it through action's payload:
        // action.payload.id, action.payload.todoMsg and PayloadAction<{id: number, todoMsg: string}>
        addTodo: (state: state, action: PayloadAction<string>) => {
            const todo: todoType= {
                id: nanoid(),
                text: action.payload
            }
            // YOU SHOULDNT MANIPULATE IT LIKE A MUTABLE OBJECT
            // Mutable: Lists, Dictionaries, Sets. 
            // Think of mutable as a whiteboard—you can write on it, erase parts of it, and write new things without destroying the board.
            // ALways try to create a new LIST or something for this
            // Since List is Mutable, meaning it is malleable and can work without chanigng the referene, we have to explicityl Manipulate it, by creaitng a new reference
            // SO, the below SHOULD be wrong
            state.todos.push(todo)
            // BUT, it is not. Since Redux Libarary uses something to imporve this. Whenever we use push, it automatically detects it and Creates a new array for us.
            // FOr any other Action, like Removing a value, use the HOF lke filter or map, because they always create a new array.
        },
        removeTodo: (state: state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    }
})

// expose your reducers so that we can send Actions to this reducer
export const {addTodo, removeTodo} = todoSlice.actions

// what does this line do?
// It combines all the separate mini-functions you wrote inside your reducers block into one single master function.
export default todoSlice.reducer