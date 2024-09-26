import React from "react";
import DefaultProfileImage from "../assets/Profile.jpg";
import profileIcon from "../assets/goProfile.jpg";
import withdrawIcon from "../assets/Withdraw.jpg";
import addmoney from "../assets/fav.jpg";
import History from "../assets/HIstory.jpg";

function Home({ name, image, balance, cardNum, spend }) {
    return (
        <>
            <div
                className="h-[96vh] md:h-[85vh] w-[360px] rounded-3xl flex flex-col bg-[#2D2A3D] shadow-lg"
                style={{ boxShadow: `0px 0px 50px 0px rgba(0,0,0,0.1)` }}
            >
                {/* Header */}
                <div className="w-full px-5 py-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[#F8F8F8] text-xl font-semibold">
                            Hello, {name}
                        </h1>
                        <img
                            src={image ? image : DefaultProfileImage}
                            alt="Profile"
                            className="rounded-full"
                            style={{
                                height: "60px",
                                width: "60px",
                                borderRadius: "50%",
                                border: "2px solid #FF6B1B",
                            }}
                        />
                    </div>

                    {/* Card Section */}
                    <div className="relative mt-16">
                        <div
                            id="card"
                            className="h-48 w-full rounded-2xl absolute -rotate-6 bg-gradient-to-r from-[#7F55F8] to-[#C661F7] shadow-2xl"
                            style={{
                                boxShadow:
                                    "0 0 30px #C661F7, 0 0 5px #FFF, 0 0 5px #F8F8F8",
                                zIndex: 1,
                            }}
                        ></div>

                        <div
                            className="h-52 w-full rounded-2xl relative translate-y-4 -translate-x-2 flex flex-col items-center justify-center backdrop-blur-lg"
                            style={{
                                marginTop: "20px",
                                background: `rgba(255, 255, 255, 0.1)`,
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                zIndex: 2,
                            }}
                        >
                            {/* Balance Info */}
                            <div className="flex text-center gap-10 pt-3 items-center text-white">
                                <div>
                                    <p className="text-sm">My balance</p>
                                    <h1 className="text-3xl font-bold">${balance.toFixed(2)}</h1>
                                </div>
                                <p className="text-lg tracking-wide">{cardNum}</p>
                            </div>

                            {/* Spend and Profit Info */}
                            <div className="flex text-center gap-20 pt-3 items-center text-white">
                                <div>
                                    <p className="text-sm">Spend</p>
                                    <h3 className="text-xl font-semibold">- ${spend}</h3>
                                </div>
                                <div>
                                    <p className="text-sm">Profit</p>
                                    <h3 className="text-xl font-semibold">+ ${balance.toFixed(2)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons Section */}
                <div id="ButtonSection" className="flex flex-col mt-10 gap-10">
                    <div className="flex gap-10 justify-center">
                        <button
                            type="button"
                            className="h-28 w-28 text-[#F8F8F8] bg-gradient-to-r from-[#FF8C3B] to-[#FF613B] rounded-3xl shadow-md hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-orange-400"
                        >
                            <img
                                src={profileIcon}
                                alt="Profile"
                                className="rounded-xl h-20 ml-5 pt-2"
                            />
                            <p className="mt-2">Profile</p>
                        </button>
                        <button
                            type="button"
                            className="h-28 w-28 text-[#F8F8F8] bg-gradient-to-r from-[#FF6B1B] to-[#FF3B6B] rounded-3xl shadow-md hover:scale-105 hover:rotate-3 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-pink-500"
                        >
                            <img
                                src={withdrawIcon}
                                alt="Withdraw"
                                className="rounded-xl h-20 ml-5 pt-2"
                            />
                            <p className="mt-2">Cash out</p>
                        </button>
                    </div>

                    <div className="flex gap-10 justify-center">
                        <button
                            type="button"
                            className="h-28 w-28 text-[#F8F8F8] bg-gradient-to-r from-[#3BC7FF] to-[#3B83FF] rounded-3xl shadow-md hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-400"
                        >
                            <img
                                src={addmoney}
                                alt="Add Money"
                                className="rounded-xl h-20 w-20 ml-4 pt-2"
                            />
                            <p className="mt-2">Add money</p>
                        </button>
                        <button
                            type="button"
                            className="h-28 w-28 text-[#F8F8F8] bg-gradient-to-r from-[#FF9C3B] to-[#FFD93B] rounded-3xl shadow-md hover:scale-105 hover:rotate-3 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-yellow-500"
                        >
                            <img
                                src={History}
                                alt="History"
                                className="rounded-xl h-20 w-20 ml-4 pt-2"
                            />
                            <p className="mt-2">History</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
