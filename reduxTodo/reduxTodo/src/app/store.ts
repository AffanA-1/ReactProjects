import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// A store requires reducer to be provided
// we can send miltiple mini - reducers being combined into one, or like we did here, where we added the Slice reducer over here
export const store = configureStore({
    reducer: todoReducer
})


// Dong this is enough to COnfigure the Steps


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch