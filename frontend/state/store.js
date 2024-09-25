import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todosSlice'

export const store = configureStore({
    reducer: {
        // contains different states of the application
        todosState: todosReducer,

    }
})
// think of the store as the state for the entire application, 
// which we will make available to the react component tree 
// via a provider.