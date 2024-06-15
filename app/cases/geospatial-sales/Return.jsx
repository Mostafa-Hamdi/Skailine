import React from 'react'
import Link from 'next/link'
const Return = (props) => {
  return (
    <div className='return heading relative bg-center bg-no-repeat bg-fixed flex justify-start items-center h-[17.5rem]'>
        <div className="container z-10 max-w-[540px] pl-6 pr-3 md:pl-3 md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <h1 className='capitalize md:pt-[0px] md:leading-[2.812rem] md:text-[3rem] text-[24px] leading-[2rem] text-white font-semibold'>{props.heading}</h1>
            <div className='my-4 text-white md:mt-[16px] md:text-[16px]'>
                <span><Link href={`/`} className='hover:text-[#f27405] md:text-[18px] md:text-[500]'>Home </Link></span>
                <span className='pr-1 pl-[1px]'>{`/`}</span>
                <span><Link href={`/cases`} className='hover:text-[#f27405] tracking-[0.1px] md:text-[18px] md:text-[500]'>{props.collectionName}</Link></span>
                <span className='pl-[4.5px] pr-[4px]'>{`/`}</span>
                <span className='capitalize inline-block'>{props.pageName}</span>
            </div>
        </div>
    </div>
  )
}

export default Return