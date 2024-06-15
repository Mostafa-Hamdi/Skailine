import Link from 'next/link'
import React from 'react'

const ReturnHome = (props) => {
  return (
    <div className='heading relative bg-center bg-no-repeat bg-fixed flex justify-start items-center h-[17.5rem]'>
        <div className="container z-10 max-w-[540px] pl-6 pr-3 md:pl-3 md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <h1 className='capitalize md:leading-[2.812rem] md:text-[3rem] text-[24px] leading-[2rem] text-white font-semibold'>{props.heading}</h1>
            <div className='my-4 text-white md:text-[16px]'>
                <span><Link href="/" className='hover:text-[#f27405] md:text-[18px] md:text-[500]'>Home</Link></span>
                <span className='capitalize inline-block pl-[4.8px] '>/ {props.pageName}</span>
            </div>
        </div>
    </div>
  )
}

export default ReturnHome