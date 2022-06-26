import React from 'react'
import streak from "../images/streak.png"
import chat from "../images/chat.png"
import notifications from "../images/notifications.png"
import settings from "../images/settings.png"
function Thingstodo() {
  return (
    <div className='bg-white w-full flex p-4 gap-4 justify-around rounded-2xl'>
        <div className='h-8'>
        
            <img className='w-full h-full cursor-pointer' src={chat} alt="" />
              
        </div>
        <div className='h-8'>
        <img className='w-full h-full cursor-pointer' src={notifications} alt="" />
        </div>
        <div className="h-8">
            <img className='w-full h-full cursor-pointer' src={streak} alt="" />
        </div>
        <div className='h-8'>
        <img className='w-full h-full cursor-pointer' src={settings} alt="" />
        </div>
    </div>
  )
}

export default Thingstodo