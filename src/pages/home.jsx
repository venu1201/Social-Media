import React from "react";
import './Home.css'
import Logosearch from "../components/Logoandsearch";
import Trends from "../components/trends";
import Profilecard from "../components/profilecard";
import Makepost from "../components/makepost"
import Contentpost from "../components/contentpost";
import Allposts from "../components/Allposts";
import Thingstodo from "../components/Thingstodo";

const Home=()=>{
    return(
        <div className="Home">
       
            <div className="left overflow-auto" >
                <div className="ml-1 mt-2">
                    <Logosearch/> 
                </div>
                <div className="div ml-1 mt-2">
                    <Trends/>
                </div>
                 
                 
            </div>
            <div className="middle mt-2 overflow-auto">
                <Makepost/>
                <Contentpost/>
                <Allposts/>
                
            </div>
            <div className="profile mr-1 mt-2 overflow-auto">
                <Thingstodo/>
                <Profilecard/>

            </div>
        </div>
    );
}
export default Home 