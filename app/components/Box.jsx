import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { arrowRight } from '../assets'
const Box = (props) => {
  return (
    <div className="box px-3 my-2 mt-[24.6px] md:mt-2 aftxl:mt-6  text-center md:text-left md:w-[48%] scr975:w-[25%] self-stretch">
        <div className="box-container relative p-8 h-full flex flex-col bg-white  rounded-xl border-[1px] border-[rgba(0,0,0,0.175)] hover:shadow-[0_0_60px_rgba(33,33,33,.2)] transition-[box-shadow_0.3s]" >
            <div className="image flex justify-center md:justify-start">
                <Image src={props.img} alt="" className='pb-4'/>
            </div>
            <h2 className='mb-2 leading-[30px] text-[#000014] text-[20px] font-semibold'>
                {props.heading}
                <br/>
                {props.heading2}
            </h2>
            <hr  className='my-4'/>
            <p className='min-h-[5rem] text-[1.125rem] text-[#000014] font-medium'>{props.paragraph}</p>
            <div className="nav-link pt-4 h-full flex">
                <Link href={`${props.link}`} className='mt-auto flex justify-center md:justify-start relative items-center text-[#0043f1] text-[18px] font-medium leading-[18px] hover:opacity-75 capitalize'>
                    read more
                    <Image src={arrowRight} alt="arrow-right" className="ml-2 w-[16px] h-[16px] text-[#0043f1] text-[18px] font-medium leading-[18px]"/>   
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Box