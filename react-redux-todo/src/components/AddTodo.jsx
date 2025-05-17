import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../reducers/todoSlice'
import Input from '../utils/input'

const AddTodo = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

const handleTodo = (e) => {
    e.preventDefault();

     if(todo.trim() === '') {
    alert("input field is empty")
    return;
  }

    dispatch(addTodo(todo.trim()));
    setTodo('')
}


  return (
    <form onSubmit={handleTodo}
    className='w-full  flex gap-3'>
      <Input value={todo} onChange = {(e) => setTodo(e.target.value)} />  

    <button type='submit' 
         className='w-1/4 px-4 py-2 bg-green-500 text-white hover:bg-green-500/80 rounded-md text-lg'>Add todo</button>
    </form>
  )
}

export default AddTodo