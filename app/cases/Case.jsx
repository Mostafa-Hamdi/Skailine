import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Case = (props) => {
  return (
    <div className='case flex pb-4 mb-4 border-b-[#d8d8d8] border-b-[1px]'>
        <div className="image h-[75px] w-[75px] rounded-[10px] mr-[14.4px]">
            <Link href={`/cases/${props.link}`}>
                <Image src={props.img} alt='case-image' className='h-full w-full rounded-[10px]'/>
            </Link>
        </div>
        <div className="text flex-1">
            <Link href={`/cases/${props.link}`} className='text-[#000014] text-[1.2rem] font-semibold leading-[1.562rem] hover:text-[#f27405]'>
                <h5>{props.caseName}</h5>
            </Link>
            <p>{props.date}</p>
        </div>
    </div>
  )
}

export default Case