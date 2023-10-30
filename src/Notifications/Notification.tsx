import React, { FunctionComponent } from 'react'

export interface NotificationProps{
    bgcolor:string,
    icon:React.ReactNode | null,
    messages:any,
    iconEnd:React.ReactNode | null,
    visibility:boolean
    handleClick:()=>void;

}

const Notificationsss:FunctionComponent<NotificationProps> = ({handleClick, bgcolor, icon, messages, iconEnd, visibility=false}) => {
  return (
<>
{ visibility &&  <div className={`${bgcolor}   p-2 flex justify-center items-center rounded-xl `}>
         <div className=' flex'>
          <div className=' p-1 flex-none  '><div className=' p-1 flex items-center justify-center rounded-full bg-gray-50 '>{icon}</div></div>
          <div className=' flex-grow text-white font-semibold text-lg justify-center items-center'>{messages}</div>
          <button onClick={handleClick} className='flex-none p-1'>{iconEnd}</button>
        </div> </div>}
</>    
  )
}

export default Notificationsss
