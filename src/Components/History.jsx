import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function History({ addbalance, cashotHist, wtxn, time, addTime, addTXN, addDate }) {
    const [addList, setAddList] = useState([]);
    const [wList, setWList] = useState([]);

    const navigate = useNavigate();

    const [allAddHistory, setAllAddHistory] = useState([]);
    const [allWHistory, setAllWHistory] = useState([]);

    // Handle add money transactions
    useEffect(() => {
        if (addbalance && addTime) {
            const newTransaction = {
                amount: addbalance,
                AddTime: addTime,
                AddTXN: addTXN,
                addDate: addDate,
            };

            // Update both addList and allAddHistory
            setAddList((prevList) => {
                const isDuplicate = prevList.some(
                    (item) => item.AddTXN === newTransaction.AddTXN
                );
                if (!isDuplicate) {
                    const updatedAddList = [newTransaction, ...prevList];
                    setAllAddHistory((prevHistory) => [newTransaction, ...prevHistory]); // Keep history
                    return updatedAddList;
                }
                return prevList;
            });
        }
    }, [addbalance, addTime, addTXN, addDate]);

    // Handle withdraw transactions
    useEffect(() => {
        if (cashotHist && wtxn && time) {
            const newTransaction = {
                amount: cashotHist,
                time: time,
                wtxn: wtxn,
                withdrawDate: addDate,
            };

            // Update both wList and allWHistory
            setWList((prevList) => {
                const isDuplicate = prevList.some(
                    (item) => item.wtxn === newTransaction.wtxn
                );
                if (!isDuplicate) {
                    const updatedWList = [newTransaction, ...prevList];
                    setAllWHistory((prevHistory) => [newTransaction, ...prevHistory]); // Keep history
                    return updatedWList;
                }
                return prevList;
            });
        }
    }, [cashotHist, wtxn, time, addDate]);

    return (
        <div className="h-[96vh] md:h-[85vh] w-[360px] rounded-3xl flex flex-col bg-[#2D2A3D] shadow-lg p-4">

            <div className=" translate-x-2 translate-y-2 ">
                <button onClick={() => navigate('/home')} className="text-white text-4xl">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            </div>
            <h1 className='text-center text-2xl mt-6 text-[#FFFFFF] font-semibold'>TRANSACTION HISTORY</h1>

            {/* Add money history */}
            <div className="mt-4">
                {addList.length === 0 ? (
                    <p className="text-center text-gray-400">No deposit history yet</p>
                ) : (
                    <ul className="space-y-2">
                        {addList.map((addMHistory, index) => (
                            <li key={index} className="bg-[#3A3C4B] p-3 rounded-lg shadow-md">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-[#76FF03]">Amount: +${addMHistory.amount}</span>
                                    <span className="text-sm text-gray-200">Transaction: {addMHistory.AddTXN}</span>
                                    <span className="text-sm text-gray-300">Date: {addMHistory.addDate}</span>
                                    <span className="text-sm text-gray-300">Time: {addMHistory.AddTime}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Withdraw history */}
            <div className="mt-6">
                {wList.length === 0 ? (
                    <p className="text-center text-gray-400">No withdrawal history yet</p>
                ) : (
                    <ul className="space-y-2">
                        {wList.map((transaction, index) => (
                            <li key={index} className="bg-[#3A3C4B] p-3 rounded-lg shadow-md">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-[#FF3D00]">Withdraw: -${transaction.amount}</span>
                                    <span className="text-sm text-gray-200">Transaction: {transaction.wtxn}</span>
                                    <span className="text-sm text-gray-200">Date: {transaction.withdrawDate}</span>
                                    <span className="text-sm text-gray-300">Time: {transaction.time}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default History;
