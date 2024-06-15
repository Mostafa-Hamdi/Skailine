"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { case1, case2, case3 } from '../assets'
const Cases = () => {
    return (
    <div className='cases py-20 relative'>
        <div className="container  max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <div className="cases-header px-3 flex items-end justify-between mb-12">
                <div className="box1">
                    <div className="heading-section ">
                        <h6 className='mb-0 p-[0px_35px_0px_15px] flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>OUR LATEST PROJECTS</h6>
                    </div>
                    <h2 className='pt-6 relative md:pt-2 text-white text-[36px] font-[600] leading-[2.75rem]'>AI case studies</h2>
                </div>
                <div className="box2">
                    <Link href="/cases" className='flex relative items-center text-white text-[18px] font-medium leading-[18px] hover:opacity-75 capitalize'>
                        discover more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-[26px] h-[26px] p-[5px] text-black bg-[#9da9b3] rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="flex-container aftmd:flex">
                <div className="case1 aftmd:w-[calc(100%/3)] px-3 ">
                    <div className="img w-full h-[391px]  overflow-hidden rounded-[10px] relative">
                        <Image src={case1} alt="case 1" className='object-cover image-leave object-center max-full h-full rounded-[10px]'/>
                    </div>
                    <Link href="/cases/geospatial-sales">
                        <h4 className='p-6 mb-2 relative text-white text-center font-semibold text-[20px] leading-[20px] hover:text-[#f27405]'> Geospatial Sales Optimization</h4>
                    </Link>
                </div>
                <div className="case2 aftmd:w-[calc(100%/3)] px-3">
                    <div className="img img w-full h-[391px] overflow-hidden rounded-[10px] relative">
                        <Image src={case2} alt="case 2" className='object-cover object-center image-leave max-w-full h-full rounded-[10px] '/>
                    </div>
                    <Link href="/cases/revolutionising-marketing">
                        <h4 className='p-6 mb-2 relative text-white text-center font-semibold text-[20px] leading-[20px] hover:text-[#f27405]'> Digital Marketing Transformation</h4>
                    </Link>
                </div>
                <div className="case3 aftmd:w-[calc(100%/3)] px-3">
                    <div className="img img w-full h-[391px] overflow-hidden rounded-[10px] relative">
                        <Image src={case3} alt="case 3" className='object-cover object-center image-leave max-w-full h-full rounded-[10px] '/>
                    </div>
                    <Link href="/cases/innovation-driven">
                        <h4 className='p-6 mb-2 relative text-white text-center font-semibold text-[20px] leading-[20px] hover:text-[#f27405]'> Innovation-driven demand planning</h4>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cases