import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import LogIn from './component/LogIn';
import Profile from './component/Profile';

const MiniContext = () => {
  return (
    <UserContextProvider>
    <div className='max-w-full w-md bg-white p-6 rounded-lg'>
    <LogIn />
    <Profile />
    </div>
    </UserContextProvider>
  )
}

export default MiniContext