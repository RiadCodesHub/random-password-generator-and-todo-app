import React from 'react'
import AddTodo from './components/addTodo'
import Todos from './components/Todos.jsx'

const App = () => {
  return (
    <div className='w-full bg-slate-600 h-screen flex items-center'>
      <div className='max-w-full w-lg min-w-sm mx-auto'>
      <AddTodo />
      <Todos />
      </div>
    </div>
  )
}

export default App