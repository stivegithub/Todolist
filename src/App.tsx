import React, { FunctionComponent, useState } from 'react';
import './App.css';
import Body from './components/Body';
import Add, { AddProps } from './components/Add';
import List, { onUpdate } from './components/List';
import Student from './components/Student';
import Notificationsss from './Notifications/Notification';
import ClearIcon from '@mui/icons-material/Clear';
import Person2Icon from '@mui/icons-material/Person2';

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface Student{
  id:number,
  nom:string
  visibility:boolean
}
interface NotificationProps{
  bgcolor:string,
  icon:React.ReactNode,
  message:string,
  iconEnd:React.ReactNode,
  visibility:boolean

}



const App:FunctionComponent=()=>{
  const [Notificat, showNotification]=useState<NotificationProps>(
    {
      bgcolor:'', iconEnd:null, icon:null, message:'', visibility:false
    }
  )
  const [student, setStudent]=useState<Student[]>(
    [
      {
          id:1,
          nom:'arnaud',
          visibility:false
      },
      {
          id:2,
          nom:'stive',
          visibility:false
      },
      {
          id:3,
          nom:'stephane',
          visibility:false
      },
      {
          id:4,
          nom:'mariette',
          visibility:false
      }
  ]
  )

const onAdd=(stive:AddProps)=>{
  const maxID:number= student.reduce((max, stud)=>{
    return  max>stud.id ? max : stud.id
  },0)
 const id=maxID+1 
 const newStudent:Student={id, ...stive, visibility:false}
 console.log(newStudent)
 setStudent([...student, newStudent])
 showNotification({...Notificat,
  iconEnd:<ClearIcon/>,
  icon:<Person2Icon/>,
  visibility:true,
  bgcolor:'bg-blue-500',
  message:'le nouveau eleve a ete bien crée'
 })

 setTimeout(() => {
  showNotification({...Notificat, visibility:false})

 }, 5000);


}

const onDelete=(id:number)=>{
  const stud= student.filter((student)=>student.id !==id)
  setStudent(stud)

  showNotification({...Notificat,
    iconEnd:<ClearIcon/>,
    icon:<Person2Icon/>,
    visibility:true,
    bgcolor:'bg-red-500',
    message:'le nouveau eleve a ete bien supprimé'
   })
  
   setTimeout(() => {
    showNotification({...Notificat, visibility:true})
  
   }, 3000);
  
}
const handleClick= ()=>{
  showNotification({...Notificat, visibility:false})
}

const update=(id:number, text:string, ref:HTMLInputElement)=>{
const upStudent=  student.map((stud)=>(
  stud.id===id? {...stud, nom:text||stud.nom, visibility:!stud.visibility}:stud
 ))
 setStudent(upStudent)
if(ref){ console.log(ref.focus())}

}
const onUp=(stive:onUpdate)=>{
  const newStudent=student.map((st)=>(st.id===stive.id? {...st, nom:stive.text, visibility:false}: st))
 setStudent(newStudent) 
 showNotification({...Notificat,
  iconEnd:<ClearIcon/>,
  icon:<Person2Icon/>,
  visibility:true,
  bgcolor:' bg-green-500',
  message:'le nouveau eleve a ete bien modifié'
 })

 setTimeout(() => {
  showNotification({...Notificat, visibility:true})

 }, 5000);


}
  return(
   <>
   <div>
    <div className=' float-right  '><Notificationsss handleClick={handleClick} bgcolor={Notificat.bgcolor} iconEnd={Notificat.iconEnd} visibility={Notificat.visibility} icon={Notificat.icon} messages={Notificat.message}/> </div>
   </div>
 <Body>
  <Add  onAdd={onAdd}/>
 <List al={student} onDelete={onDelete} onUpdate={update} onUp={onUp}/>
 </Body>
   </>
    
  )
}

export default App;
