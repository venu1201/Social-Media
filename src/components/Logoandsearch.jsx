import React from "react";
import './Logoandsearch.css'
import {UilSearch} from '@iconscout/react-unicons'
import logo from '../images/fblogo.png'
const Logosearch=()=>{
    return(
        <div className="Logosearch">
            <img className="nlogo" src={logo} alt="" /> 
            <div className="search">
                <input type="text" className="textsearch" placeholder="hello" />
                <div className="icon">
                    <UilSearch/>
                </div>
                    
            </div>
            
        </div>
    );
}
export default Logosearch 