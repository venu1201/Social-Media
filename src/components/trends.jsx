import React from "react";
import img1 from '../images/img1.jpg'
const Trends=()=>{
    return (
        <div className="flex bg-white mt-4 h-80 scroll overflow-y-scroll rounded-3xl w-full flex-col">
            <div className="flex justify-center p-3 font-semibold m-2">
                <b>Leaderboard</b>
            </div>
            <div className="flex flex-col ">
                <div className="flex flex-row pl-1 gap-8">
                    <img className="w-20 h-20 rounded-full" src={img1} alt="" />
                    <div className="flex flex-col justify-center align-middle">
                        <div>
                            <b>venusai</b>
                            
                        </div>
                        <div>
                            venusai.12j@gmail.com
                        </div>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <div>
                            <b>28</b>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pl-1 gap-8">
                    <img className="w-20 h-20 rounded-full" src={img1} alt="" />
                    <div className="flex flex-col justify-center align-middle">
                        <div>
                            <b>venusai</b>
                            
                        </div>
                        <div>
                            venusai.12j@gmail.com
                        </div>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <div>
                            <b>28</b>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pl-1 gap-8">
                    <img className="w-20 h-20 rounded-full" src={img1} alt="" />
                    <div className="flex flex-col justify-center align-middle">
                        <div>
                            <b>venusai</b>
                            
                        </div>
                        <div>
                            venusai.12j@gmail.com
                        </div>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <div>
                            <b>28</b>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pl-1 gap-8">
                    <img className="w-20 h-20 rounded-full" src={img1} alt="" />
                    <div className="flex flex-col justify-center align-middle">
                        <div>
                            <b>venusai</b>
                            
                        </div>
                        <div>
                            venusai.12j@gmail.com
                        </div>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <div>
                            <b>28</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Trends