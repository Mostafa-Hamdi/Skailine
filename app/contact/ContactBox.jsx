import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const ContactBox = (props) => {
  return (
    <div className='book px-3 mb-6 md:w-[calc(100%/3)] md:self-stretch'>
        <div className="container md:flex flex-col justify-between items-center hover:transform hover:scale-[1.05] p-6 border-[p-6] border-[1px] rounded-[12px] text-center">
            <div className="image flex justify-center">
                <Image src={props.img} alt=""/>
            </div>
            <h2 className='mb-4 mt-6 leading-[24px] text-[#000014] text-[24px] font-semibold'>
                {props.head}
            </h2>
            <p className='flex-1 text-[1.125rem] text-[#000014] font-medium px-8 py-4 md:p-0 aftmd:px-8 aftmd:py-4'>{props.paragraph}</p>
            <div className="nav-link flex justify-center  pt-4 h-full ">
                <Link href="" className='mt-auto flex justify-center text-ellipsis md:block overflow-hidden text-nowrap md:justify-start relative items-center text-black text-[18px] font-[400] leading-[18px] underline'>
                    {props.linkName}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ContactBox