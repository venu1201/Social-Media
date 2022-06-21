import React from 'react'
import './makepost.css'
import {UilSearch} from '@iconscout/react-unicons'
function Makepost() {
  return (
    <div className='makepost' >
            <div className='searchopt' >
                    <UilSearch/>
            </div>
            
            <input className='searchinpost' type="text" placeholder='Search for a friend' />
        
    </div>
  )
}

export default Makepost