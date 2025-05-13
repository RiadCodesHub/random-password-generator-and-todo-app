import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {

 const {user} = useContext(UserContext)
 if(!user) return <div className='mt-4 text-xl text-red-400'>Please Login</div>

 return <div className='mt-4 text-green-400 text-xl'>Welcome {user.username} 🎉</div>

}

export default Profile