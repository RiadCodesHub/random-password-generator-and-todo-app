import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './Todo/Todo';
import RandomPasswordGenerator from './randomPassword/RandomPasswordGenerator';

const App = () => {
  
  return (
    <Router>
      <div className='w-full h-screen max-w-[1500px] min-w-sm mx-auto bg-black/50 flex flex-col items-center pt-10'> 
      <nav className="flex gap-4 mb-8 items-center ">
          <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Todo App</Link>
          <Link to="/password" className="px-4 py-2 bg-green-500 text-white rounded-lg">Password Generator</Link>
        </nav>

        <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/password' element={<RandomPasswordGenerator/>} />
        </Routes>
        </div>
    </Router>
  )
}

export default App