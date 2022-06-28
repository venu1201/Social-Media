import React from 'react'
import profilepic from '../images/profilepic.jpg'
function Allposts() {
    return (
        <div className='w-full h-min bg-white mt-3 p-4  '>
            <div className='flex flex-col bg-gray-200 rounded-xl'>
                <div className='flex gap-4 p-4'>
                    <div>
                        <img className="w-10 h-10 rounded-full" src={profilepic} alt="" />
                    </div>
                    <div className='flex m-auto w-full'>
                        <b>venusai</b>
                    </div>

                </div>
                <div className='pr-4 pl-4 pb-4'>
                    <img className='rounded-xl' src={profilepic} alt="" />
                </div>
            </div>
            <div className='flex flex-col bg-gray-200 rounded-xl'>
                <div className='flex gap-4 p-4'>
                    <div>
                        <img className="w-10 h-10 rounded-full" src={profilepic} alt="" />
                    </div>
                    <div className='flex m-auto w-full'>
                        <b>venusai</b>
                    </div>

                </div>
                <div className='pr-4 pl-4 pb-4'>
                    <img className='rounded-xl' src={profilepic} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Allposts;