import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './Todo/Todo';
import RandomPasswordGenerator from './randomPassword/RandomPasswordGenerator';

const App = () => {
  const [backgroundImg, setBackgroundImg] = useState(
    'url(https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=600)'
  );

  const changeBackground = () => {
    // Change the background dynamically
    const newImages = [
      'url(https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=600)',
      'url(https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600)',
      'url(https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600)',
    ];

    const randomImg = Math.floor(Math.random() * newImages.length)
    setBackgroundImg(newImages[randomImg])

  };

  return (
    <Router>
      <div
        className='w-full max-h-full h-auto max-w-[1500px] min-w-sm  mx-auto flex flex-col items-center pt-10'
        style={{ backgroundImage: backgroundImg, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <button 
        className='px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg mb-3'
        onClick={changeBackground}
        >
          Change background
        </button>
    
        <nav className="flex gap-4 mb-8 items-center">
          <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500  text-white rounded-lg">Todo App</Link>
          <Link to="/password" className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg">Password Generator</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/password' element={<RandomPasswordGenerator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
