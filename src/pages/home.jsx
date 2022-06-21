import React from "react";
import './Home.css'
import Logosearch from "../components/Logoandsearch";
import Trends from "../components/trends";
import Profilecard from "../components/profilecard";
import Makepost from "../components/makepost"
import Contentpost from "../components/contentpost";
const Home=()=>{
    return(
        <div className="Home">
            <div className="left" >
                <div >
                    <Logosearch/> 
                </div>
                <div className="div">
                    <Trends/>
                </div>
                 
                 
            </div>
            <div className="middle">
                <Makepost/>
                <Contentpost/>
                
            </div>
            <div className="profile">
                <Profilecard/>

            </div>
        </div>
    );
}
export default Home 