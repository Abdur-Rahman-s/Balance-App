import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import DefaultProfileImage from "../assets/Profile.jpg";
import profileIcon from "../assets/goProfile.jpg";
import withdrawIcon from "../assets/Withdraw.jpg";
import addmoney from "../assets/fav.jpg";
import History from "../assets/HIstory.jpg";
import { Link } from "react-router-dom";

const UserProfile = ({ image, name }) => (
    <Link to={'/profile'}>
        <img
            src={image || DefaultProfileImage}
            alt={`${name}'s profile`}
            className="rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
            style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                border: "2px solid #FF6B1B",
            }}
        />
    </Link>
);

const CardSection = ({ balance, cardNum, spend }) => (
    <div className="relative mt-16">
        <div
            className="h-48 w-full rounded-2xl absolute -rotate-6 bg-gradient-to-r from-[#7F55F8] to-[#C661F7] shadow-2xl"
            style={{
                boxShadow: "0 0 30px #C661F7, 0 0 5px #FFF, 0 0 5px #F8F8F8",
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
            <div className="flex text-center gap-10 pt-3 items-center text-white">
                <div>
                    <p className="text-sm">My balance</p>
                    <h1 className="text-xl font-bold">${balance.toFixed(2)}</h1>
                </div>
                <p className="text-lg tracking-wide">{cardNum}</p>
            </div>
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
);

const Button = ({ to, iconSrc, text, gradientFrom, gradientTo }) => (
    <Link to={to}>
        <button 
            className={`h-28 w-28 text-[#F8F8F8] bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-3xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-opacity-60`}
        >
            <img src={iconSrc} alt={text} className="rounded-xl h-20 w-20 ml-4 pt-2 transition-transform duration-300 ease-in-out" style={{ objectFit: "contain" }} />
            <p className="mt-2">{text}</p>
        </button>
    </Link>
);

function Home({ name, image, balance, cardNum, spend }) {
    return (
        <div className="h-[96vh] md:h-[85vh] w-[360px] rounded-3xl flex flex-col bg-[#2D2A3D] shadow-lg" 
            style={{ 
                boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)` // Modern shadow with layered depth
            }}>
            <div className="w-full px-5 py-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-[#F8F8F8] text-xl font-semibold">Hello, {name}</h1>
                    <UserProfile image={image} name={name} />
                </div>
                <CardSection balance={balance} cardNum={cardNum} spend={spend} />
            </div>
            <div id="ButtonSection" className="flex flex-col mt-10 gap-10">
                <div className="flex gap-10 justify-center">
                    <Button to='/profile' iconSrc={profileIcon} text="Profile" gradientFrom="#FF8C3B" gradientTo="#FF613B" />
                    <Button to='/add-money' iconSrc={addmoney} text="Add money" gradientFrom="#3BC7FF" gradientTo="#3B83FF" />
                </div>
                <div className="flex gap-10 justify-center">
                    <Button to='/withdraw' iconSrc={withdrawIcon} text="Cash out" gradientFrom="#FF6B1B" gradientTo="#FF3B6B" />
                    <Button to='/history' iconSrc={History} text="History" gradientFrom="#FF9C3B" gradientTo="#FFD93B" />
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    balance: PropTypes.number.isRequired,
    cardNum: PropTypes.string.isRequired,
    spend: PropTypes.number.isRequired,
};

export default Home;
