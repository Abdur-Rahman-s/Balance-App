import { useState } from 'react';
import './App.css';
import { Registration } from './Components/Registrations';
import Profile from './Components/Profile';
import Home from './Components/Home';
// import { AddMoney } from './Components/addMoney';
import { AddMoney } from './Components/AddMoney';
import Withdraw from './Components/Withdraw';
import History from './Components/History';
import { createBrowserRouter} from 'react-router-dom'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState('');
  const [image, setImgae] = useState();
  const [cardNum, setCardNum] = useState('xxxx xxxx xxx xxxx')
  const [balance, setBalance] = useState(0);
  const [spend , setSpend] = useState(0)
  const [wtxn , wsetTxn] = useState('');
  const [addtxn , wsetaddTxn] = useState('');
  const [time, setTime] = useState('');
  const [addTime , setAddTime] = useState('');
  const [addTXN , setAddTXN] = useState('');
  const [addDate , setAddDate] = useState('');
  const [addbalance , setAddbalance] = useState('')
  const [withdraw, setWithdraw] = useState('');
  const [cashotHist , setCashoutHstory] = useState('')

  
  function cashOutHistory(balance) {
    setCashoutHstory(balance)
  }

  function withdrawVlaue(amount) {
    setWithdraw(amount)
  }

  function handeladdbalance(newBalance) {
    setAddbalance(newBalance)
  }

  function handleRegistration(name, email, valid) {
    setName(name);
    setEmail(email);
    setValid(valid);
  }

  function HandleProfile(newImage) {
    setImgae(newImage)
  }
  function handleCardid(newCardid) {
    setCardNum(newCardid);
  }
  function HandleBalance(newBalance) {
    setBalance(newBalance);
  }

  function sepndBalance(newSpend) {
    setSpend(newSpend)
  }

  function spendTransaction(transaction) {
    wsetTxn(transaction)
  }
  function spendTime(newtime) {
    setTime(newtime)
  }

  function addmoneyTXN(newTransaction) {
    setAddTXN(newTransaction)
  }

  function addmoneyTime(myTime) {
    setAddTime(myTime)
  }

  function wMoneyDate(date) {
    setAddDate(date)
  }



  return (
    <>

      <div className='main-container flex ' >
        <div className='flex gap-9 justify-center flex-wrap  '>
          <Registration registration={handleRegistration} />
          <Home name={name} image={image} balance={balance} cardNum={cardNum} spend={spend} />
          <Profile name={name} email={email} valid={valid} myProfile={HandleProfile} handleCardid={handleCardid} />
        </div>
        <div className='flex gap-9 justify-center flex-wrap  '>
          <AddMoney name={name} cardNum={cardNum} HandleBalance={HandleBalance} addmoneyTime={addmoneyTime} addmoneyTXN={addmoneyTXN} wMoneyDate={wMoneyDate} handeladdbalance={handeladdbalance} />
          <Withdraw cashOutHistory={cashOutHistory} balance={balance} cardNum={cardNum} HandleBalance={HandleBalance} sepndBalance={sepndBalance} spendTransaction={spendTransaction} spendTime={spendTime} withdrawVlaue={withdrawVlaue} />
          <History balance={balance} spend={spend} wtxn={wtxn} time={time} addTXN={addTXN} addTime={addTime} addDate={addDate} addbalance={addbalance} withdraw={withdraw} cashotHist={cashotHist}  />
        </div>
      </div>
    </>
  );
}

export default App;
