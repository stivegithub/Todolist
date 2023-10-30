import React, { FunctionComponent } from 'react'

interface BodyProps{
    children:React.ReactNode
}
const Body:FunctionComponent<BodyProps>=({children}) => {
  return (
    <div className=' flex items-center justify-center h-screen w-screen'>
    <div className='  lg:border-2 lg:border-black  h-96  w-96  overflow-y-scroll p-4  '>
      <div className=' text-center font-bold text-3xl lg:my-0 my-5'>Todo List</div>
      {children}  
    </div>
   </div>
  )
}

export default Body
