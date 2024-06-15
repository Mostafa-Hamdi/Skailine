import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const AllCaseDescription = (props) => {
  return (
    <div className='all-case-description'>
        <div className="image h-[420px] md:h-[500px] w-full rounded-[10px] overflow-hidden">
            <Image src={props.img} alt="" className='h-full hover:transform hover:scale-[1.1] w-full rounded-[10px]'/>
        </div>
        <div className="content pt-8 mb-10 ">
            <Link href={`/cases/${props.link}`} className='flex mb-4 h-[18px] items-center gap-[8px] text-[#4c4c4c] text-[16px] leading-[16px] font-semibold'>
                <div className='calender w-[16px] h-[16px]' ></div> 
                {props.date}
            </Link>
            <p className='text-[18px] mb-4 font-medium text-[#000014]'>{props.mainParagraph}</p>
            <h5 className='mt-4 mb-4 text-[24px] font-semibold leading-[24px]'>{props.head1}</h5>
            <p className='text-[18px] mb-4 font-medium text-[#000014]'> {props.paragraph1}</p>
            <h5 className='mt-4 mb-4 text-[24px] font-semibold leading-[24px]'>{props.head2}</h5>
            <p className='text-[18px] mb-4 font-medium text-[#000014]'>{props.paragraph2}</p>
            <h5 className='mt-4 mb-4 text-[24px] font-semibold leading-[24px]'>{props.head3}</h5>
            <p className='text-[18px] mb-4 font-medium text-[#000014]'>{props.paragraph3}</p>
            <h5 className='mt-4 mb-4 text-[24px] font-semibold leading-[24px]'>{props.head4}</h5>
            <p className='text-[18px] mb-4 font-medium text-[#000014]'>{props.paragraph4}</p>
            <h5 className='mt-4 mb-4 text-[24px] font-semibold leading-[24px]'>{props.head5}</h5>
            <p className='text-[18px] mb-4 font-medium text-[#000014]'>{props.paragraph5}</p>
            <h5 className='mt-4 mb-4 text-[24px] font-semibold leading-[24px]'>{props.head6}</h5>
            <p className='text-[18px] mb-4 font-medium text-[#000014]'>{props.paragraph6}</p>
            <div className="text-box  mt-8 mb-4 px-10 py-8 bg-[rgba(230,235,248,.6)] rounded-[12px] border-[#0043f1] border-l-[9px]">
                <h5 className='font-[700] text-[#000014] text-[18px] mb-4'><strong>{props.boxHead}</strong> </h5>
                <p className='text-[18px] text-[#4c4c4c] font-normal leading-[1.625rem] capitalize'>{props.boxParagraph}</p>
            </div>
        </div>
    </div>
  )
}

export default AllCaseDescription