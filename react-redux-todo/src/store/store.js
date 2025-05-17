import {configureStore} from '@reduxjs/toolkit'
import todoRducer from '../reducers/todoSlice'

export const store = configureStore({
reducer: todoRducer
})