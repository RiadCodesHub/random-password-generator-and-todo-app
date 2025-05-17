import React from 'react'

const Input = ({value, onChange} ) => {
  return (
    <input type="text"
        value={value} 
        onChange={onChange} 
        className='w-3/4 bg-slate-300 px-4 text-lg py-2 outline-1 rounded-md'
        placeholder='enter your todo...'
        required
        />
  )
}

export default Input