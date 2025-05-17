import {createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
   todos: [{text: 'Hello world!', id: 1}]
 }

const todoSlice = createSlice({
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
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {

            const { id, text } = action.payload;
            const currentTodo = state.todos.find(todo => todo.id === id);

         if (currentTodo) {
            currentTodo.text = text
         }
            
        }
    }
})

export const {addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer