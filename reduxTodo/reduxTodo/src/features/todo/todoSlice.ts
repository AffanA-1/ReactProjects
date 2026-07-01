import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text:"Hello world"}]
}




export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    }
})

// expose your reducers so that we can send Actions to this reducer
export const {addTodo, removeTodo} = todoSlice.actions

// what does this line do?
// It combines all the separate mini-functions you wrote inside your reducers block into one single master function.
export default todoSlice.reducer