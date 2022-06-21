import React from "react";
import './profilecard.css'
import cover from '../images/coverphoto.jpg'
import propic from '../images/profilepic.jpg'
const Profilecard = () => {
    return (
        <div className="card">
            <div className="profileimages">
                <img className="coverpic" src={cover} alt="" />
                <img className="profpic" src={propic} alt="" />
            </div>
            <div className="profilenames">
                <span className="fontprofilename">Venusai</span>
                <span>venusai.12j@gmail.com</span>
            </div>
            <hr />
            <div className="status">
                
                <div className="posts fl">
                    <span>Posts</span>
                    <span>10</span>
                </div>
                <div className="verline"></div>
                <div className="follwers fl">
                    <span>Followers</span>
                    <span>1000</span>
                </div>
                <div className="verline"></div>
                <div className="following fl">
                    <span>Following</span>
                    <span>100</span>
                </div>
                
            </div>
            <hr />
            <div className="viewprofile">
                View Profile
            </div>

        </div>

    )
}
export default Profilecard