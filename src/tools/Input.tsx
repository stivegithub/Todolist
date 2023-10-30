import React, { FunctionComponent, useState } from 'react'

interface InputProps{
    placeholder:string
}

const Input:FunctionComponent<InputProps> = ({placeholder}) => {
  const [text ,setText]=useState<string>('')

  return (
    <input type="text" placeholder={`${placeholder}`} value={text}   className='focus:outline-none w-full py-1 focus:border-green-400 focus:border-b-2 rounded-md' onChange={(e)=>setText(e.target.value)} />
  )
}

export default Input
