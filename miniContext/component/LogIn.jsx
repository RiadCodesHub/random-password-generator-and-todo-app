import React, {useContext, useState} from 'react';
import UserContext from '../context/UserContext';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const {setUser} = useContext(UserContext)

   const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})

   } 
  return (
    <div className='flex flex-col gap-4'>
     <h2 className='text-2xl font-semibold text-center mb-3'>Log in</h2>
     <input type="text" placeholder='username'
            id='name'
            className='outline-1 rounded-lg px-3 py-2'
            value={username} onChange={e => setUsername(e.target.value)} />
     <input type="password" placeholder='password'
             className='outline-1 rounded-lg px-3 py-2'
            value={password} onChange={e => setPassword(e.target.value)} />
     <button onClick={handleSubmit} className='bg-blue-600 text-white py-2 rounded-lg'>Log in</button>
    </div>
  )
}

export default LogIn