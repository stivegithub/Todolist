import React, { FunctionComponent } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Button from '../tools/Button'

interface update{
  id:number,
  newText:string
}

interface StudentProps{
   visibility:boolean,
    nom:string,
    onDelete:(id:number)=>void;
    onUpdate:(res:update)=>void
    
}

const Student:FunctionComponent<StudentProps> = ({nom, onDelete, onUpdate}) => {
  return (
    <div className=' bg-gray-200 rounded-md'>
        <div className=' flex '>
            <div className=' flex-grow'>{nom}</div>
            <Button icon={<DeleteRoundedIcon/>} textColor=' text-red-400' handleOnclick={onDelete}/>
            <Button icon={<ModeEditOutlineOutlinedIcon/>} textColor='  text-blue-500' handleOnclick={onUpdate} />

        </div>
      
    </div>
  )
}

export default Student
