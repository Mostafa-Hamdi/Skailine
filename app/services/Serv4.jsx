import Image from 'next/image'
import React from 'react'
import { serv4 } from '../assets'

const Serv4 = () => {
  return (
    <div className='serv py-12 md:py-20'>
        <div className="container md:flex max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <div className="image w-full md:flex-1 md:w-[calc(100%/3)] px-3">
                <Image src={serv4} alt='' className='w-full'/>
            </div>
            <div className="text md:w-[calc((100%/3)*2)] px-9">
                <div className="heading-section ">
                    <h6 className='mb-0 p-[12px_35px_12px_20px] text-wrap flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>….WE ENSURE SUCCESS</h6>
                </div>
                <h2 className='text-[40px] font-semibold leading-[2.75rem] pt-6 md:pt-2 mb-4'>Change Management and Governance</h2>
                <ul className='mb-4 max-w-[850px] pl-8'>
                    <li className='relative pl-8 text-[#212529px] mb-4 font-[400]'>
                        <p className='mb-[4.8px]'>We help you achieve planned user adoption and impactful scale with your AI products through a tailored <strong>change management program. </strong></p>
                    </li>
                    <li className='relative text-[#212529px] pl-8 mb-4 font-[400] '>
                        <p className='mb-[4.8px]'>We assist you setting up an <strong>AI model governance </strong>that ensures <strong>the legal and ethical compliance, </strong>the continuous quality and the relevance of your AI solution by automating model monitoring and maintenance.</p>
                    </li>
                    <li className='relative text-[#212529px] pl-8 mb-4 font-[400]'>
                        <p className='mb-[4.8px]'>Together with your team we <strong>launch, monitor and improve </strong>your AI products.</p>
                    </li>
                    <li className='relative text-[#212529px] pl-8 mb-4 font-[400]'>
                        <p className='mb-[4.8px]'>We help you <strong> measure business success </strong> of your AI transformation and adopt improvement measures.</p>
                    </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Serv4