import React from 'react'
import './contentpost.css'
import propic from '../images/profilepic.jpg'
import Send from "../images/send.png"
function Contentpost() {
  return (
    <div className='contentpost'>
        <img className='round' src={propic} alt="" />
        <div className='postinginput'>
            <div className='inputs'>
              <input className='bar' type="text" placeholder="WHats going on..." />
              <img src={Send} className="sendicon" alt="" />
            </div>
            
            <div className='icons'>
                <div className='cons'>
            
                  images
                </div>
                <div className='cons'>
                  videos
                </div>
                <div className='cons'>
                  location
                </div>
                <div className='cons'>
                  scedule
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Contentpost