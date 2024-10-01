import { useState } from 'react';
import './App.css';
import { Registration } from './Components/Registrations';
import Profile from './Components/Profile';
import Home from './Components/Home';
import { AddMoney } from './Components/AddMoney';
import Withdraw from './Components/Withdraw';
import History from './Components/History';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState('');
  const [image, setImage] = useState(); // Fixed typo: setImgae to setImage
  const [cardNum, setCardNum] = useState('xxxx xxxx xxx xxxx');
  const [balance, setBalance] = useState(0);
  const [spend, setSpend] = useState(0);
  const [wtxn, setWtxn] = useState(''); // Fixed typo: wsetTxn to setWtxn
  const [addtxn, setAddTxn] = useState(''); // Fixed typo: wsetaddTxn to setAddTxn
  const [time, setTime] = useState('');
  const [addTime, setAddTime] = useState('');
  const [addTXN, setAddTXN] = useState('');
  const [addDate, setAddDate] = useState('');
  const [addBalance, setAddBalance] = useState(''); // Fixed typo: setAddbalance to setAddBalance
  const [withdraw, setWithdraw] = useState('');
  const [cashOutHist, setCashoutHist] = useState(''); // Fixed typo: setCashoutHstory to setCashoutHist
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status

  function cashOutHistory(balance) {
    setCashoutHist(balance);
  }

  function withdrawValue(amount) {
    setWithdraw(amount);
  }

  function handleAddBalance(newBalance) {
    setAddBalance(newBalance); // Updated variable name
  }

  function handleRegistration(name, email, valid) {
    setName(name);
    setEmail(email);
    setValid(valid);
    setIsRegistered(true); // Set registration status to true
  }

  function handleProfile(newImage) {
    setImage(newImage); // Updated variable name
  }

  function handleCardId(newCardId) {
    setCardNum(newCardId);
  }

  function handleBalance(newBalance) {
    setBalance(newBalance);
  }

  function spendBalance(newSpend) {
    setSpend(newSpend);
  }

  function spendTransaction(transaction) {
    setWtxn(transaction); // Updated variable name
  }

  function spendTime(newTime) {
    setTime(newTime);
  }

  function addMoneyTXN(newTransaction) {
    setAddTXN(newTransaction);
  }

  function addMoneyTime(myTime) {
    setAddTime(myTime);
  }

  function wMoneyDate(date) {
    setAddDate(date);
  }

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={isRegistered ? <Navigate to="/home" /> : <Registration registration={handleRegistration} />} />
        <Route path="/home" element={<Home name={name} image={image} balance={balance} cardNum={cardNum} spend={spend} />} />
        
        <Route path="/profile" element={<Profile name={name} email={email} valid={valid} myProfile={handleProfile} handleCardid={handleCardId} />} />
        <Route path="/add-money" element={<AddMoney name={name} cardNum={cardNum} HandleBalance={handleBalance} addmoneyTime={addMoneyTime} addmoneyTXN={addMoneyTXN} wMoneyDate={wMoneyDate} handeladdbalance={handleAddBalance} />} />
        <Route path="/withdraw" element={<Withdraw cashOutHistory={cashOutHistory} balance={balance} cardNum={cardNum} HandleBalance={handleBalance} sepndBalance={spendBalance} spendTransaction={spendTransaction} spendTime={spendTime} withdrawVlaue={withdrawValue} />} />
        <Route path="/history" element={<History balance={balance} spend={spend} wtxn={wtxn} time={time} addTXN={addTXN} addTime={addTime} addDate={addDate} addbalance={addBalance} withdraw={withdraw} cashotHist={cashOutHist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
