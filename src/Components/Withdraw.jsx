import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function Withdraw({ balance, cardNum, HandleBalance, sepndBalance, spendTransaction, spendTime, cashOutHistory }) {
    const [withdraw, setWithdraw] = useState('');
    const [card, setCard] = useState('');
    const [wtxn, wsetTxn] = useState('');
    const [time, setTime] = useState('');
    const [showToggle, setShowToggle] = useState(false); // State to control the toggle visibility
    const [withdrawAmount, setWithdrawAmount] = useState(0); // State to store the withdrawn amount

    const navigate = useNavigate();

    // Function to set the transaction time
    function WithdrawTime() {
        let myDate = new Date();
        let currentDate = myDate.toLocaleTimeString();
        setTime(currentDate);
        spendTime(currentDate);
    }

    // Function to generate random transaction ID
    function Transaction() {
        let Txn = Math.ceil(Math.random() * 5555555555555 + 30000);
        wsetTxn(Txn);
        spendTransaction(Txn);
    }

    // Function to handle amount input
    function WithdrawAmount(event) {
        setWithdraw(event.target.value);
    }

    // Function to handle card verification
    function CardVerify(event) {
        setCard(event.target.value);
    }

    // Function to handle form submission
    function handleWithdraw(event) {
        event.preventDefault();

        const withdrawAmount = parseFloat(withdraw); // Ensure the withdraw amount is a number

        // Check if card number matches
        if (card.trim() !== cardNum.trim()) {
            alert('Please enter a valid card number');
            return;
        }

        // Validate the withdrawal amount
        if (withdrawAmount <= 0) {
            alert('Please enter a valid amount greater than zero.');
            return;
        }

        if(cardNum == 'xxxx xxxx xxx xxxx'){
            alert('Invalid card number');
            return;
        }
        // Check for sufficient balance
        if (withdrawAmount > balance) {
            alert('Insufficient balance');
            return;
        }

        // Update balance
        const updatedBalance = balance - withdrawAmount; // Deduct the withdrawal amount from balance
        HandleBalance(updatedBalance); // Update the balance in the parent component
        sepndBalance(withdrawAmount); // Update the spend balance

        // Pass withdrawal history only after confirmation
        cashOutHistory(withdraw);

        // Show the toggle instead of alert
        setWithdrawAmount(withdrawAmount);
        setShowToggle(true); // Show the toggle

        // Reset fields
        setWithdraw('');
        setCard('');
        wsetTxn('');
        setTime('');
    }

    // Wrapper function to call both Transaction and WithdrawTime
    function handleClick() {
        Transaction();
        WithdrawTime();
        cashOutHistory();
    }

    // Function to handle OK button click
    const handleToggleClose = () => {
        setShowToggle(false); // Hide the toggle
    };

    return (
        <div className="h-[96vh] md:h-[85vh] w-[360px] rounded-3xl flex flex-col bg-gradient-to-r from-[#2D2A3D] to-[#47456C] shadow-lg">
            <div className="translate-x-4 translate-y-4 ">
                <button onClick={() => navigate('/home')} className="text-white text-4xl">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            </div>
            <div className="px-6 py-8">
                <h1 className="text-3xl text-white text-center font-semibold mb-4 animate-fade-in">WITHDRAW MONEY</h1>
                <h1 className="text-white text-center text-lg mb-6">
                    Current balance: <span className="font-bold">${balance.toFixed(2)}</span>
                </h1>
                <form className="space-y-6" onSubmit={handleWithdraw}>
                    <div className="relative">
                        <input
                            required
                            type="number"
                            id="Amount"
                            value={withdraw}
                            onChange={WithdrawAmount}
                            placeholder="Enter your amount"
                            className="w-full h-12 pl-4 pr-4 text-white bg-transparent border border-[#808080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B1B] transition-all placeholder:text-gray-400"
                        />
                        <span className="absolute top-2 right-4 text-[#FF6B1B] font-semibold">$</span>
                    </div>
                    <div className="relative">
                        <input
                            required
                            value={card}
                            onChange={CardVerify}
                            type="text"
                            id="CardNumber"
                            placeholder="Enter your Card Number"
                            className="w-full h-12 pl-4 pr-4 text-white bg-transparent border border-[#808080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B1B] transition-all placeholder:text-gray-400"
                        />
                        <span className="absolute top-2 right-4 text-[#FF6B1B] font-semibold">💳</span>
                    </div>
                    <button
                        onClick={handleClick}
                        className="w-full h-12 mt-4 bg-[#345CF3] text-white rounded-md font-bold hover:bg-[#1e3fbd] transition-all duration-300 shadow-md transform hover:scale-105"
                    >
                        Withdraw
                    </button>
                </form>
            </div>

            {/* Toggle for withdrawal confirmation */}
            {showToggle && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold">Withdrawal Successful</h2>
                        <p className="mt-2">Successfully withdrawn: <strong>${withdrawAmount.toFixed(2)}</strong></p>
                        <button
                            onClick={handleToggleClose}
                            className="mt-4 bg-blue-500 text-white rounded-md  w-full px-4 py-2 hover:bg-blue-600"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Withdraw;
