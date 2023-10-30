import React, { FunctionComponent } from 'react'


interface ButtonProps{
    handleOnclick:(data:any)=>void,
    textColor:string,
    icon:any,
    onfocus?:()=>void;
    
}

const Button:FunctionComponent<ButtonProps> = ({ textColor, icon, handleOnclick , onfocus}) => {
  return (
    <div className={`p-1 bg-white rounded-lg flex justify-center items-center `}>
      <button onClick={handleOnclick}  className={`${textColor}`} >{icon}</button>
    </div>
  )
}

export default Button
