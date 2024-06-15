import React from 'react'
import Image from 'next/image'
import { methology } from '../assets'
const Methology = () => {
  return (
    <div className='methology py-12 md:pt-[80px]'>
        <div className="container flex flex-col md:flex-row aftlg:pt-[30px]  max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <div className="text md:w-[50%] aftlg:w-[calc(100%/3)] px-3">
                <div className="heading-section mb-5 aftxl:mb-[25px]">
                    <h6 className='mb-2 p-[0px_30px_0px_15px] flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>OUR METHODOLOGY</h6>
                </div>
                <h2 className='mb-6 aftmd:pr-[4.8rem] aftlg:mp-[2.9rem] leading-[44px] text-[36px] p-0 font-semibold'>AI Solutions For Your Business</h2>
                <p className='  aftmd:pr-[4.8rem] aftlg:pr-[2.9rem] mb-5 leading-[27px] font-medium text-[18px] text-[#000014]'>We are impactful and human-centric Our objective is to lead on a fast track from AI strategy design to deployed MVPs in 12 weeks</p>
            </div>
            <div className="image flex-1 px-3">
                <Image src={methology} alt="Methology-image" className='w-full h-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Methology