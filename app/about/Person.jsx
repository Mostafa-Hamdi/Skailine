import Link from 'next/link'
import React from 'react'
import { linkedin } from '../assets'
import Image from 'next/image'
const Person = (props) => {
  return (
    <div className='person rounded-[16px] relative z-50  scr493:w-[calc((100%-24px)/2)] md:w-[calc((100%-72px)/4)]'>
        <div className="image rounded-[16px] overflow-hidden">
          <Image className='w-full h-full' src={props.img} alt=""/>
        </div>
        <div className="text flex justify-end flex-col z-30 absolute top-[75%] scr493:top-[70%] p-[1.4rem]">
            <p className='text-white text-[18px] mb-1 font-medium'>{props.paragraph1}</p>
            <h4 className='text-white pb-2 font-semibold text-[18px] leading-[20px]'>{props.name}</h4>
            <div className="hidden-box opacity-0 ">
              <p className='text-white hidden mb-4 text-[16px] font-medium'>Brings 2 decades of global leadership and expertise in AI.</p>
              <p className='text-white hidden mb-4 text-[16px] font-medium'>Passionate about innovation, guides businesses through AI.</p>
              <Link href="" className='hidden'>
                  <Image className='w-5 h-auto scale-[1.1]' src={linkedin} alt="linkedin icon"/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Person