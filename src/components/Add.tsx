import React, { FunctionComponent, useState } from 'react'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '../tools/Button';

export interface AddProps{
  nom:string

}
 export interface Eleve{
  onAdd:(eleve:AddProps)=>void
}
const Add:FunctionComponent<Eleve> = ({onAdd}) => {
  const [text, setText]=useState<string>('')
  const onSub=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!text){
      alert("il n'y'a pas de texte.")
      return
    } 
    onAdd({ nom:text})
    setText('')
  }
  return (
    <div>
        <form action="" onSubmit={(e)=>onSub(e)}>
        <div  className=' flex gap-1'>
            <div className=' flex-grow'>    <input type="text" placeholder={`New student`} value={text}  className=' focus focus:outline-none w-full py-1 focus:border-green-400 border border-green-400 focus:border-b-2 rounded-md' onChange={(e)=>setText(e.target.value)} /></div>
            <Button textColor=' text-green-400' icon={<SendRoundedIcon/>} handleOnclick={()=>{}}/>
        </div>
        </form>
      
    </div>
  )
}

export default Add
