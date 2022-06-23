import React from "react";

import {UilSearch} from '@iconscout/react-unicons'
import logo from '../images/fblogo.png'
import img1 from '../images/img1.jpg'
const Logosearch=()=>{
    return(
        <div className="w-full bg-white flex flex-col p-1 rounded-3xl">
        
        <div className="w-full bg-white flex flex-col p-3 rounded-3xl" >
            <div className="flex justify-center align-middle m-3">
                <b>Happy Birthday to my dear mates</b>
            </div>
            <div className="flex gap-5">
                <img className="w-16 h-full rounded" src={img1} alt="" />
                <div className="flex flex-col justify-center w-full ">
                    <div>
                        <b> venusai</b> 
                    </div>
                    <div>
                       <b>venusai.12j@gmail.com</b> 
                    </div>
                </div>
                <div className="w-36 flex flex-col justify-center ">
                      <div>
                            <b>20 years</b> 
                      </div>
                </div>
            </div>
            
        </div>
        
            <div className="flex gap-5 ml-3 mr-3">
                <img className="w-16 h-full rounded" src={img1} alt="" />
                <div className="flex flex-col justify-center w-full ">
                    <div>
                        <b> tony stark</b> 
                    </div>
                    <div>
                       <b>tony.j@gmail.com</b> 
                    </div>
                </div>
                <div className="w-36 flex flex-col justify-center ">
                      <div>
                            <b>32 years</b> 
                      </div>
                </div>
            </div>
            <div className="flex gap-5 ml-3 mr-3">
                <img className="w-16 h-full rounded" src={img1} alt="" />
                <div className="flex flex-col justify-center w-full ">
                    <div>
                        <b> Peter parker</b> 
                    </div>
                    <div>
                       <b>spidy@gail.com</b> 
                    </div>
                </div>
                <div className="w-36 flex flex-col justify-center ">
                      <div>
                            <b>24 years</b> 
                      </div>
                </div>
            </div>
            
        
        </div>
    );
}
export default Logosearch 