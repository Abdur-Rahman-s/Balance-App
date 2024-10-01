import React, { useState, useCallback } from 'react';
import bgCard from '../assets/kGkSg1v.png';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export function AddMoney({ name, cardNum, HandleBalance, addmoneyTime, addmoneyTXN, wMoneyDate, handeladdbalance }) {
    const [balance, setBalance] = useState('');
    const [matchId, setMatchId] = useState('');
    const [submittedBalances, setSubmittedBalances] = useState([]);
    const [addTime, setAddTime] = useState('');
    const [addDate, setAddDate] = useState('');
    const [addTXN, setAddTXN] = useState('');
    const [showModal, setShowModal] = useState(false); // State for showing modal
    const [currentBalance, setCurrentBalance] = useState(0); // State to store the balance to be added

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const addMoneyTime = useCallback(() => {
        const currentDate = new Date().toLocaleTimeString();
        setAddTime(currentDate);
        addmoneyTime(currentDate);
    }, [addmoneyTime]);

    const addMoneyDate = useCallback(() => {
        const currentDate = new Date().toDateString();
        setAddDate(currentDate);
        wMoneyDate(currentDate);
    }, [wMoneyDate]);

    const addTransaction = useCallback(() => {
        const txn = Math.ceil(Math.random() * 5555555555555 + 30000);
        setAddTXN(txn);
        addmoneyTXN(txn);
    }, [addmoneyTXN]);

    const handleClick = () => {
        addMoneyTime();
        addTransaction();
        addMoneyDate();
    };

    const totalBalance = submittedBalances.reduce((acc, curr) => acc + curr, 0);

    const handleInput = (event) => {
        event.preventDefault();
        const numericBalance = parseFloat(balance);

        if (cardNum.trim() !== matchId.trim()) {
            alert('Card number did not match. Please check the card number.');
            return;
        }
        if(cardNum == 'xxxx xxxx xxx xxxx'){
            alert('Invalid card number');
            return
        }

        if (isNaN(numericBalance) || numericBalance <= 0) {
            alert('Please enter a valid amount greater than zero.');
            return;
        }

        setCurrentBalance(numericBalance); // Store the balance to show in modal
        setShowModal(true); // Show the modal

        setBalance('');
        setMatchId('');
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSubmittedBalances((prev) => [...prev, currentBalance]);

        HandleBalance(totalBalance + currentBalance);
        handeladdbalance(currentBalance);
    };

    return (
        <div className="h-[96vh] md:h-[85vh] w-[360px] rounded-3xl flex flex-col color bg-[#2D2A3D]" style={{ boxShadow: `0px 0px 50px 0px rgba(0,0,0,0.1)` }}>

            {/* Back Arrow Button */}
            <div className="translate-x-4 translate-y-4">
                <button onClick={() => navigate('/home')} className="text-white text-4xl">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            </div>

            <h1 className="text-center mt-4 text-white text-2xl">YOUR VISA CARD</h1>
            <div className="flex flex-col px-4 relative py-4">
                <img src={bgCard} alt="Card Background" className="absolute w-[90%] rounded-lg" />
                <div className="w-full px-4 z-20">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-light">Name</p>
                            <p className="font-medium tracking-widest">{name}</p>
                        </div>
                        <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" alt="Card" />
                    </div>
                    <div className="pt-1">
                        <p className="font-light">Card Number</p>
                        <p className="font-medium tracking-more-wider">{cardNum}</p>
                    </div>
                    <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-light text-xs">Valid</p>
                                <p className="font-medium tracking-wider text-sm">11/15</p>
                            </div>
                            <div>
                                <p className="font-light text-xs">Expiry</p>
                                <p className="font-medium tracking-wider text-sm">03/25</p>
                            </div>
                            <div>
                                <p className="font-light text-xs">CVV</p>
                                <p className="font-bold tracking-more-wider text-sm">···</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 flex flex-col gap-2 mt-8">
                <h1 className="text-center text-white text-2xl font-semibold">ADD MONEY</h1>
                <h3 className="text-white text-center text-lg mt-2">Total Balance</h3>
                <h4 className="text-white text-center text-2xl font-bold mt-1">{`$${totalBalance.toFixed(2)}`}</h4>
                <form onSubmit={handleInput} className="mt-6 space-y-4">
                    <input
                        required
                        type="number"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                        placeholder="Enter your amount"
                        className="w-full h-12 pl-4 pr-4 bg-transparent text-white border border-[#808080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B1B] transition-all placeholder-gray-400"
                    />
                    <input
                        required
                        type="text"
                        value={matchId}
                        onChange={(e) => setMatchId(e.target.value)}
                        placeholder="Enter your Card Number"
                        className="w-full h-12 pl-4 pr-4 bg-transparent text-white border border-[#808080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B1B] transition-all placeholder-gray-400"
                    />
                    <button
                        onClick={handleClick}
                        type="submit"
                        className="w-full h-12 bg-[#345CF3] text-white font-semibold rounded-md hover:bg-[#1e3fbd] transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Add money
                    </button>
                </form>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[300px]">
                        <h2 className="text-center text-2xl font-semibold mb-4">Confirm Add Money</h2>
                        <p className="text-center text-lg">You are about to add:</p>
                        <h3 className="text-center text-2xl font-bold my-2">{`$${currentBalance.toFixed(2)}`}</h3>
                        <button
                            onClick={handleModalClose}
                            className="mt-4 w-full bg-[#345CF3] text-white py-2 rounded-md font-semibold hover:bg-[#1e3fbd] transition-transform transform hover:scale-105"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
