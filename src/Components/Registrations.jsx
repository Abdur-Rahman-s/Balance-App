import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Crypto from "../assets/Crypto.jpg";

export function Registration({ registration }) {
    const navigate = useNavigate(); // Create a navigate function
    const [countryCode, setCountryCode] = useState('+880');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePhoneNumberChange(event) {
        const value = event.target.value;
        // Ensure only numeric values are entered
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    }

    function handleInput(event) {
        event.preventDefault();
        const totalLength = phoneNumber.length + countryCode.length;
    
        if (totalLength < 12 || totalLength > 14) {
            setError('Number is not valid. Total length should be between 12 and 14 digits.');
            return;
        }
    
        const validPhone = countryCode + phoneNumber;
        registration(name, email, validPhone);
    
        // Reset form fields after registration
        setCountryCode('+880');
        setName('');
        setEmail('');
        setPhoneNumber('');
        setError('');
    
        // Navigate to the home page after registration
        navigate('/home'); // This should now correctly navigate to the home route
    }
    

    const handleCountryChange = (e) => {
        setCountryCode(e.target.value);
    };

    return (
        <div className='h-[96vh] md:h-[85vh] w-[360px] rounded-3xl flex items-center justify-center color'
            style={{ backgroundImage: `url(${Crypto})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0px 0px 50px 0px rgba(0,0,0,0.1)' }}>

            <form onSubmit={handleInput} style={{
                background: 'rgba(255, 255, 255, 0.16)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '20px 12px',
                animation: 'fadeIn 1s ease-out',
            }}>

                <h1 className='text-center text-4xl text-[#FF6826] font-bold animate-bounce'>Balancify</h1>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div>
                    <label htmlFor="Name" className='block text-[#20B283] mt-2'>Name :</label>
                    <input
                        type="text"
                        id='Name'
                        className='w-[300px] h-10 border-none outline-none cursor-pointer pl-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-[#FF6826] bg-white/70'
                        placeholder='Please Enter Name'
                        required
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div>
                    <label htmlFor="Email" className='block text-[#20B283] font-semibold mt-2'>Email :</label>
                    <input
                        type="email"
                        id='Email'
                        className='w-[300px] h-10 border-none outline-none cursor-pointer pl-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-[#FF6826] bg-white/70'
                        placeholder='Please Enter Email'
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div>
                    <label htmlFor="Phone-Number" className='block text-[#20B283] font-semibold mt-2'>Number :</label>
                    <div className="flex">
                        <select
                            id="countryCode"
                            className='w-[60px] h-10 border-none outline-none cursor-pointer bg-[#20B283] text-white rounded-l-lg text-xs transition-all duration-300 hover:scale-105'
                            onChange={handleCountryChange}
                            value={countryCode}
                        >
                            <option value="+1">+1</option>
                            <option value="+91">+91</option>
                            <option value="+44">+44</option>
                            <option value="+880">+880</option>
                            <option value="+61">+61</option>
                        </select>
                        <input
                            type="text"
                            id='Phone-Number'
                            className='w-[240px] h-10 border-none outline-none cursor-pointer pl-3 rounded-r-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-[#FF6826] bg-white/70'
                            placeholder='Enter Number'
                            required
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    </div>
                </div>
                <button  type="submit" className='h-10 w-[300px] mt-5 bg-gradient-to-r from-[#320F6C] to-[#FF6826] rounded-lg text-[#fff] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-[#FF6826] hover:to-[#320F6C] focus:ring-2 focus:ring-[#FF6826]'>
                    Sign up
                </button>
            </form>
        </div>
    );
}
