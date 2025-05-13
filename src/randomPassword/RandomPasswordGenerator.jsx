import React, {useCallback, useEffect, useRef, useState} from 'react'

const RandomPasswordGenerator = () => {
  const [length, setLength] = useState(6);
const [numberAllowed, setNumberAllowed] = useState(false);
const [CharAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState('');
const currentRef = useRef(null);

const passwordGenaretor = useCallback(
  () => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz';

    if(numberAllowed) str += 123456789;
    if(CharAllowed) str += "@#$%^&*+";

    for (let i = 1; i <= length; i++) {
    let randomNum = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(randomNum)
    }
    setPassword(pass)
  },
  [length, numberAllowed, CharAllowed, setPassword],
)

const copy = useCallback(
  () => { 
  currentRef.current?.select();
   window.navigator.clipboard.writeText(password);
  },
  [password],
)


useEffect(() => {
  passwordGenaretor();
}, [length, numberAllowed, CharAllowed,passwordGenaretor])


  return (
    <div className='w-full h-screen'>
      <div className='max-w-full min-w-sm  w-md mx-auto flex flex-col bg-white p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold text-center'>Random password genaretor</h2>
        {/*main body*/}
        <div className='w-full h-auto mt-5 flex flex-col'>
          <div className='w-full flex gap-3'>
            <input type="text" 
                   className='text-xl w-full flex-1 rounded-lg px-3 py-1 outline-2 '
                   value={password}
                   ref={currentRef}
                   readOnly /> 
            <button className='px-6 py-2 text-lg bg-amber-300 hover:bg-amber-400 font-semibold rounded-lg'
                    onClick={copy} >Copy</button>
          </div>
    
          <div className='flex flex-col mt-4 gap-2'>
            <span className='flex gap-2'> 
            <input type="range" 
                  max={100}
                  min={6}
                   className='accent-blue-500'
                  id='trackRange'
                  onChange={e => setLength(e.target.value)} />
            <label htmlFor="trackRange" className='text-xl font-bold'>{length}</label>
            </span>
            <span className='flex gap-2'>
              <input type="checkbox" 
                     id='numberAllowed'
                     className='accent-blue-500'
                     onClick={() => setNumberAllowed(prev => !prev)} />
              <label htmlFor="numberAllowed"
                     className='text-lg font-medium'>Add number</label>
            </span>
            <span className='flex gap-2'>
              <input type="checkbox" 
                     id='CharAllowed'
                     className='accent-blue-500'
                     onClick={() => setCharAllowed(prev => !prev)} />
              <label htmlFor="CharAllowed"
                     className='text-lg font-medium'>Add Character</label>
            </span>

          </div>

        </div>
      </div>

    </div>
  )
}

export default RandomPasswordGenerator