import React, { useState } from 'react';
import ProfileImg from "../assets/Profile.jpg";

function Profile({ name, email, valid, myProfile, handleCardid }) {
    const [image, setImage] = useState(ProfileImg);
    const [cardid, setCardid] = useState('');

    function CardNumber() {
        const parts = [2000, 3000, 4000, 5000].map(n => Math.ceil(Math.random() * n));
        const totalNumber = parts.join(" ");
        setCardid(totalNumber);
        handleCardid(totalNumber);
    }

    function UploadImage(event) {
        const selectImage = event.target.files[0];
        if (selectImage) {
            const imageUrl = URL.createObjectURL(selectImage);
            setImage(imageUrl);
            myProfile(imageUrl);
        }
    }

    return (
        <div className="h-[96vh] md:h-[85vh] w-[360px] rounded-3xl flex flex-col items-center justify-center bg-gradient-to-r from-[#2A2A35] to-[#444464] shadow-2xl relative overflow-hidden">
            {/* Profile Title */}
            <div className="absolute top-10">
                <h1 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#F9B06D] to-[#F8E53F] animate-pulse">
                    YOUR PROFILE
                </h1>
            </div>

            {/* Profile Image and Upload Button */}
            <div className="relative mt-20">
                <form>
                    <input type="file" onChange={UploadImage} accept="image/*" className="hidden" id="uploadImage" />
                    <label htmlFor="uploadImage" className="absolute right-0 top-[140px] z-20 text-[#FFD700] cursor-pointer transform transition-transform hover:scale-125">
                        <span className="material-symbols-outlined text-4xl">photo_camera</span>
                    </label>

                    <img
                        src={image}
                        alt="Profile"
                        className="w-[200px] h-[200px] rounded-full object-cover shadow-xl transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                </form>
            </div>

            {/* Profile Details */}
            <div className="mt-8 text-white flex flex-col items-center text-center gap-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#F9B06D] text-transparent bg-clip-text animate-fadeIn">
                    {name}
                </h2>
                <p className="text-xl text-[#F0F0F0] font-light animate-fadeIn">
                    Email: <span className="font-semibold text-[#F8E53F]">{email}</span>
                </p>
                <p className="text-xl text-[#F0F0F0] font-light animate-fadeIn">
                    Phone: <span className="font-semibold text-[#F8E53F]">{valid}</span>
                </p>

                {/* Card Number Section */}
                <div className="mt-4 flex flex-col items-center">
                    <p className="text-lg text-[#F0F0F0] font-light">Card:</p>
                    {cardid ? (
                        <p className="text-2xl font-semibold text-[#F8E53F] mt-2 animate-fadeIn">
                            {cardid}
                        </p>
                    ) : (
                        <button
                            onClick={CardNumber}
                            className="bg-[#FF613B] hover:bg-[#FF8C3B] text-white text-lg px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-110 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#FF8C3B] mt-3"
                        >
                            Generate Card
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
