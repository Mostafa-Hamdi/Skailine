"use client"
import React from 'react'
import { useState } from "react";
// import {  } from 'react';
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const [message, setMessage] = useState('');
    const [nameErr, setNameErr] = useState(null);
    const [emailErr, setEmailErr] = useState(null);
    const [numErr, setNumErr] = useState(null);
    const [messageErr, setMessageErr] = useState(null);
    const handleSubmit=(e)=> {
        e.preventDefault();
        if (!name) {
            setNameErr("Please fill out this field.")
        } else {
            setNameErr(null)
        }
        if (!email) {
            setEmailErr("Please fill out this field.")
        } else {
            setEmailErr(null)
        }
        if (!num) {
            setNumErr("Please fill out this field.")
        } else {
            setNumErr(null)
        }
        if (!message) {
            setMessageErr("Please fill out this field.")
        } else {
            setMessageErr(null)
        }
        if (name && email && num && message) {
            console.log("hey")
            window.location.reload();
        }
    }

  return (
    <div className='contact-form py-12 md:py-20 relative'>
        <div className="container relative text-[white] max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <form action="" className='px-3' onSubmit={handleSubmit}>
                <div className='md:flex md:gap-5'>
                    <div className='md:w-[50%]'>
                        <label className='w-full text-[20px] mb-4 inline-block' htmlFor="name">Name</label>
                        <br />
                        <p className='mb-4'>
                            <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter your name'  className='w-full text-black p-5 border-[#bac4e7] border-[1px] rounded-[12px] mb-[15px] inline-block focus:outline-none' type="text" name="name" id='name'/>
                            {nameErr && <span className='text-[red] text-[18px] '>{nameErr}</span>}
                        </p>
                    </div>
                    <div className='md:w-[50%]'>
                        <label className='w-full text-[20px] mb-4 inline-block' htmlFor="mail">E-mail</label>
                        <br />
                        <p className='mb-4'>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email'  className='w-full text-black p-5 border-[#bac4e7] border-[1px] rounded-[12px] mb-[15px] inline-block focus:outline-none' type="email" name="mail" id='mail'/>
                            {emailErr  && <span className='text-[red] text-[18px] '>{emailErr}</span>}
                        </p>
                    </div>
                </div>
                <div>
                    <label className='w-full text-[20px] mb-4 inline-block ' htmlFor="num">Phone Number</label>
                    <br />
                    <p className='mb-4'>
                        <input value={num} onChange={(e)=> setNum(e.target.value)} placeholder='Enter phone number'  className='w-full p-5 text-black border-[#bac4e7] border-[1px] rounded-[12px] mb-[15px] inline-block focus:outline-none' type="text" name="num" id='num'/>
                        {numErr  && <span className='text-[red] text-[18px] '>{numErr}</span>}
                    </p>
                </div>
                <div>
                    <label className='w-full text-[20px] mb-4 inline-block' htmlFor="message">Message</label>
                    <br />
                    <p className='mb-4'>
                        <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder='Enter message here'  className='w-[100%] text-black block rounded-[12px] p-5 mb-[15px]  focus:outline-none min-h-[calc(1.5em+.75rem+2px)]' name="message" cols={10} rows={7} id="message"></textarea>
                        {messageErr  && <span className='text-[red] text-[18px] '>{messageErr}</span>}
                    </p>
                </div>
                <div className='mt-2'>
                     <button className='bg-[#0043f1] aftlg:w-[166px] hover:bg-[#f27405]  max-h-[64px] p-[24px_30px_24px_30px] rounded-[30px] text-white text-[16px] leading-[16px] uppercase w-[100%] block'>Submit</button> 
                    {nameErr || emailErr || numErr || messageErr ? <span className='px-2.5 block pt-10 pb-5 text-[red] text-[18px] '>One or more fields have errors</span> : ""}
                    {/* {nameErr && emailErr && numErr && messageErr && <span className='px-2.5 pt-10 pb-5 text-[red] text-[18px] '>One or more fields have errors</span>} */}
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm