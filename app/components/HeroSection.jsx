import React from 'react'
import Link from 'next/link'
// import { video } from '../assets'
const HeroSection = () => {
  return (
    <div className='hero-section relative flex items-center justify-center mb-[43.6px] aftxl:mb-0'>
        <div className="content relative scr987:absolute z-[50] my-auto">
            <div className="hero-container w-[100%] p-12 pt-[49px] text-white mx-auto max-w-[1095px]">
                <h1 className=' text-[50px] md:text-[50px] leading-[2.8rem] md:leading-[70px] font-semibold '>FROM VISION TO VALUE - <br/> NAVIGATING THE AI JOURNEY TOGETHER</h1>
                <p className='m-[23px_auto_20px] text-[1.1rem] max-w-[777px] scr987:m-[23px_auto_35px] md:text-[20px] leading-[28px] md:leading-[36px] font-[900] text-center'>We help you leverage artificial intelligence as a competitive asset.</p>
                <p className='m-[23px_auto_40px] text-[1.1rem] max-w-[777px] scr987:m-[23px_auto_40px] md:text-[20px] leading-[28px] md:leading-[36px] font-[700] text-center'>We assist you reimagine your business models, redesign your processes, foster a culture of scaled adoption and develop impactful and scalable Enterprise AI solutions.</p>
                <div className="link text-center">
                    <Link href="/contact" className='p-[16px_42px_16px_42px] leading-[21.43px] text-[16px] rounded-[30px] border-[white] uppercase inline-block border-[1px] font-semibold text-center'>Book A Call</Link>
                </div>
            </div>
        </div>
        <div className="video absolute scr987:relative  scr987:z-0 top-[0] left-0 z-[0] w-full h-full">
            <video className='object-cover h-full scr987:h-auto w-full py-[2.8px] bg-[#0a194b] object-center '  loop muted playsinline webkit-playsinline autoPlay x5-playsinline poster="https://skailinepartners.com/wp-content/uploads/2024/05/plavholder-vido.webp"> 
                <source src="https://skailinepartners.com/wp-content/uploads/2024/05/Skailine-Video.mp4" type="video/mp4"></source>  
            </video>
        </div>
    </div>
  )
}

export default HeroSection