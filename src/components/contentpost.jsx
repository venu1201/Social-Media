import React from 'react'
import './contentpost.css'
import propic from '../images/profilepic.jpg'
function Contentpost() {
  return (
    <div className='contentpost'>
        <img className='round' src={propic} alt="" />
        <div>
          hey there welcome to git hubby
        </div>
    </div>
    
  )
}

export default Contentpost