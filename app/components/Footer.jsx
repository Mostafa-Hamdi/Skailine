import React from 'react'
import { logo } from '../assets'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='pt-[48px] md:pt-[60px] pb-[46px] md:pb-[48px] aftxl:pt-[60px]  aftxl:pb-[48px] border-[2px] border-[#ecedfd]'>
        <div className="container max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px] lg:max-h-[229.5px] aftxl:max-w-[1320px] mx-auto md:flex">
            <div className="box1 max-h-[148.68px] mb-5 md:w-[calc(100%/3)] px-3">
                <div className="logo-footer">
                    <Link href="/">
                        <Image src={logo} alt="logo" className='w-[200px] block  h-auto align-middle'/>
                    </Link>
                </div>
                <h3 className='mt-4 lg:mt-[15px] aftxl:mt-[15.5px] pr-[86.4px]  xsm:pr-[185.6px]  md:pr-0 text-[1.5rem] md:text-[20px] lg:text-[1.5rem] font-medium leading-[31px] md:leading-[28px] lg:leading-[31px] aftxl:leading-[30.4px]'>Transforming businesses with intelligent solutions</h3>
            </div>
            <div className="box2 md:w-[calc(100%/3)] px-3">
                <h3 className='text-[1.5rem] md:text-[20px] lg:text-[1.5rem] font-medium leading-[31px] mb-5 relative  md:leading-[28px] lg:leading-[31px]'>Pages</h3>
                <ul className="footer-links mb-[18px] lg:flex lg:flex-row lg:flex-wrap lg:justify-between">
                    <li className='mb-3 flex items-center lg:w-[48%]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66663 11.3334L9.99996 8.00008L6.66663 4.66675" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Link href="/" className='pl-2 relative text-[16px] font-normal text-[#000014]'>Home</Link>
                    </li>
                    <li className='mb-3 flex items-center lg:w-[48%]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66663 11.3334L9.99996 8.00008L6.66663 4.66675" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Link href="/about" className='pl-2 relative text-[16px] font-normal text-[#000014]'>About Us</Link>
                    </li>
                    <li className='mb-3 flex items-center lg:w-[48%]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66663 11.3334L9.99996 8.00008L6.66663 4.66675" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Link href="/services" className='pl-2 relative text-[16px] font-normal text-[#000014]'>Services</Link>
                    </li>
                    <li className='mb-3 flex items-center lg:w-[48%]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66663 11.3334L9.99996 8.00008L6.66663 4.66675" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Link href="/cases" className='pl-2 relative text-[16px] font-normal text-[#000014]'>Case Studies</Link>
                    </li>
                    <li className='mb-3 flex items-center lg:w-[48%]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66663 11.3334L9.99996 8.00008L6.66663 4.66675" stroke="#000014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Link href="/contact" className='pl-2 relative text-[16px] font-normal text-[#000014]'>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="box3 md:w-[calc(100%/3)] px-3">
                <h3 className='pt-4 mb-[33px] md:mb-[32px] font-semibold text-[24px] leading-[1.5rem] md:pt-0'>Join Our AI community</h3>
                <form action="" className='relative mb-[18px]'>
                    <input type="email" name='mail' placeholder='Enter your email' className='bg-[#deeafe] h-[51px] p-[15px] md:p-[14px_15px_16px] lg:p-[15px] rounded-[30px] w-full focus:outline-none'/>
                    <button className='rounded-[60px] w-[94.29px] bg-[#0043f1] md:w-[85.14px] lg:w-auto text-[15px] md:text-[13px] lg:text-[15px] font-semibold leading-[15px] text-white  absolute top-[4px] right-[7px] h-[41px] p-[6px_12px]'>Subscribe</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer