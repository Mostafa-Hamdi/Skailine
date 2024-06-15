import Image from 'next/image'
import React from 'react'
import { serv2 } from '../assets'

const Serv2 = () => {
  return (
    <div className='serv py-12 md:py-20'>
    <div className="container md:flex max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
        <div className="image w-full md:flex-1 md:w-[calc(100%/3)] px-3">
            <Image src={serv2} alt='' className='w-full'/>
        </div>
        <div className="text md:w-[calc((100%/3)*2)] px-9">
            <div className="heading-section ">
                <h6 className='mb-0 p-[12px_35px_12px_20px] text-wrap flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>…WE SET THE GROUND FOR SUCCESS</h6>
            </div>
            <h2 className='text-[40px] font-semibold leading-[2.75rem] pt-6 mb-4'>AI Design and Implementation</h2>
            <ul className='mb-4 max-w-[850px] pl-8'>
                <li className='relative pl-8 text-[#212529px] mb-4 font-[400]'>
                    <p className='mb-[4.8px]'>We  <strong>evaluate technical feasibility, </strong>validate assumptions with a proof of concept for selected use cases. <strong>estimate project costs and timeline </strong>and update the business case accordingly.</p>
                </li>
                <li className='relative text-[#212529px] pl-8 mb-4 font-[400] '>
                    <p className='mb-[4.8px]'>We <strong>assess your AI delivery capabilities </strong>from a talent, data & technology and from an operating model and AI governance perspective.</p>
                </li>
                <li className='relative text-[#212529px] pl-8 mb-4 font-[400]'>
                    <p className='mb-[4.8px]'>We <strong>identify talent gaps </strong>and assist you closing these with temporary external resources, upskilling of your internal talent and AI/ML expert hiring.</p>
                </li>
                <li className='relative text-[#212529px] pl-8 mb-4 font-[400]'>
                    <p className='mb-[4.8px]'>We<strong> build MVPs for each use case validating the business outcome</strong> with the defined objectives and iterate towards a winning AI products. </p>
                </li>
                <li className='relative text-[#212529px] pl-8 mb-4 font-[400]'>
                    <p className='mb-[4.8px]'>Help you <strong>define the target architecture </strong> select the <strong>required infrastructure</strong> and define and implement a <strong>winning data strategy.</strong></p>
                </li>
        </ul>
        </div>
    </div>
</div>
  )
}

export default Serv2