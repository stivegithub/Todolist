import React, { FunctionComponent, useRef, useState } from 'react'
import Student from './Student'

interface stud{
  id:number,
  nom:string,
  visibility:boolean
}
export interface onUpdate{
  id:number,
  text:any
}
interface al{
  al:stud[],
  onDelete:(id:number)=>void;
  onUpdate:(id:number, text:any, focus:HTMLInputElement)=>void;
  onUp:(eleve:onUpdate )=>void;
}

const List:FunctionComponent<al> = ({al, onDelete, onUpdate, onUp}) => {

  const [text, setText]=useState<string>('')
  const newRef= useRef<HTMLInputElement|any>(null)

  const onUpn=(e:React.FormEvent<HTMLFormElement>, id:number)=>{
    e.preventDefault();
    if(!text){
      alert( 'le nouveau nom ne doit pas etre vide.')
      return
    }
    onUp({text, id})
    setText('')
  }

  return (
   <>
   {al.length>0?
     <div className='flex flex-col gap-3 mt-3'>
     {al.map((stud)=>(
      <div key={stud.id}>
        <Student  nom={stud.nom} visibility={stud.visibility}  onDelete={()=>onDelete(stud.id)} onUpdate={()=>onUpdate(stud.id, text, newRef.current )} />
{ stud.visibility &&  <form action=""  onSubmit={(e)=>onUpn(e, stud.id)}><div className=' flex-grow'>    <input type="text" placeholder={`New Name`} value={text} ref={newRef}   className='focus:outline-none w-full py-1 focus:border-blue-500 focus:border-b-2 rounded-md border border-blue-400' onChange={(e)=>setText(e.target.value)} /></div></form>}
      </div>
     ))}
     
   </div>: <p className=' flex items-center  justify-center font-bold'> Aucun eleve disponible</p>
   }
   </>
  )
}

export default List
