import React from 'react'
import { about} from '../assets'
import Image from 'next/image'
import Link from 'next/link'
const Mission = () => {
  return (
    <div className='mission py-12 md:py-20'>
        <div className="container md:flex md:gap-0 max-w-[540px] px-6 md:px-3 md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <div className="image-container md:w-[calc(100%/3)] md:pr-4">
                <div className="image h-fit relative rounded-[16px]">
                    <Image src={about} className='rounded-[16px] w-full max-w-full h-auto  object-cover object-top'/>
                </div>
            </div>
            <div className="text md:flex-1 mb-12 md:mb-0 mt-4 md:mt-0 px-3">
                <div className="text-container md:pl-5">
                    <div className="section-name">
                        <h6 className='mb-0 p-[0px_35px_0px_15px] flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>about us</h6>
                    </div>
                    <h2 className='pt-6 md:pt-2 mb-4 text-[40px] font-semibold leading-[2.75rem]'>Our Mission</h2>
                    <p className='mb-4 text-[18px] text-[#000014] leading-[1.5] font-medium'>In today’s world  business opportunities and challenges pop up without warning as soon as the environment is prosperous. To reap the benefits and turn challenges into opportunities, organisations need to act fast, embrace change and overcome fear.   </p>
                    <p className='mb-4 text-[18px] text-[#000014] leading-[1.5] font-medium'>Artificial intelligence has emerged as one of the most transformative paradigms since Generative AI became available to the world at the end of 2023. </p>
                    <p className='mb-4 text-[18px] text-[#000014] leading-[1.5] font-medium'>Like in the opening of Charles Dickens’ ‘A Tale Of two Cities’: ”It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness”, the story of Artificial Intelligence follows the path between euphoria and disappointment, between fear of failure and fear of missing out. </p>
                    <p className='mb-4 text-[18px] text-[#000014] leading-[1.5] font-medium'>Our mission is to help our clients’ leadership take off to heights where fear and uncertainty become excitement and inspiration. </p>
                    <p className='mb-4 text-[18px] text-[#000014] leading-[1.5] font-medium'>We rapidly assemble a team of world-class experts in leadership and change, transformation and innovation, ecosystem and value architecture redesign, and in-depth industry expertise to develop with our clients the business case for their AI transformation and design the path to its value realisation.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission