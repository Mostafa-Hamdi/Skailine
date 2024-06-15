import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { calender } from '../assets'
const CaseInfo = (props) => {
  return (
    <div className='case-info'>
        <div className="image h-[420px] md:h-[500px] w-full rounded-[10px] overflow-hidden">
            <Link href="">
                <Image src={props.img} alt="" className='h-full hover:transform hover:scale-[1.1] w-full rounded-[10px]'/>
            </Link>
        </div>
        <div className="content pt-8 mb-10 ">
            <div className='flex h-[18px] items-center gap-[8px] text-[#4c4c4c] text-[16px] leading-[16px] font-semibold'>
                <p className='calender w-[16px] h-[16px]' ></p> 
                {props.date}
            </div>
            <h5 className='mt-4 mb-4 text-[24px] font-semibold leading-[24px]'>{props.caseName}</h5>
            <p className='text-[18px] mb-4 font-medium text-[#000014]'>{props.info}</p>
            <Link href={`/cases/${props.lnk}`} className='text-[18px] font-semibold text-[#f27405] hover:text-[#0043f1]'>Continue Reading</Link>
        </div>
    </div>
  )
}

export default CaseInfo