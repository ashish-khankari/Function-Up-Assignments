import React, { useState } from 'react'
import axios from 'axios'
import './OTP.css'


export default function SendOTP() {
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')


    const validateNumber = ()=>{
        const validatemyNumber = /^[6-9]\d{9}$/.test(number)
        if(!validatemyNumber){
            setMessage("Please Check Your Number")
        }else{
            setMessage("Message sent Succesfully")
            setNumber(" ")
        }
        
    }

    function OTP() {
        axios.post(`https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`, {
            mobile: `${number}`
        })
            .then((response) => { response.json() })
            .then((data) => setNumber(data.mobile))
            .catch((error) => console.log(error))
            validateNumber()
    }

    return (
        <div className='OTP'>
            
            <input 
            type='number' 
            placeholder='Enter Your Mobile Number' 
            onChange={(e)=>{setNumber(e.target.value)}}
            value={number}
            className='input'
            />
        
            <button onClick={OTP} className='btn'>Send OTP</button>

            <h2 className='message'>{message}</h2>
        </div>
    )
}