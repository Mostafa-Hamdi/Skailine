import React from 'react'
import Image from 'next/image'
import { aiImage } from '../assets'
const AiSection = () => {
  return (
    <div className='ai-section py-12 md:py-20'>
      <div className="container md:flex items-center px-3 md:px-0 max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
        <div className="info px-6 md:px-9 flex-1 ">
          <div className="info-container mb-16">
            <div className="section-name">
                <h6 className='mb-0 p-[0px_35px_0px_18px] tracking-widest flex items-center text-[#3a3a3a] text-[12px] uppercase  font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>OUR METHODOLOGY</h6>
            </div>
            <h2 className='pt-6 md:pt-5 mb-5 text-[36px] font-semibold leading-[44px]'>AI Solutions For Your Business</h2>
            <p className='mb-4 text-[#000014] text-[18px] font-medium leading-[27px]'>We are impactful and human-centric Our objective is to lead on a fast track from AI strategy design to deployed MVPs in 12 weeks</p>
            {/* <p className='mb-4 text-[#000014] text-[18px] font-medium leading-[1.5]'>At SK[AI]LINE PARTNERS, we drive transformative processes, guide strategic decisions with design principles, and offer a comprehensive AI transformation approach. From framing AI visions to scaled production, we ensure alignment with capabilities and business value.</p> */}
          </div>
        </div>
        <div className="image px-3 md:px-3 md:w-[50%] aftlg:w-[calc((100%*2)/3)]">
          <Image src={aiImage} alt="ai-image"/>
        </div>
      </div>
    </div>
  )
}

export default AiSection