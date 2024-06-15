"use client";
import React, {useState} from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '../assets'
const Header = () => {
    const path = usePathname();
    const [toggleOpen, setToggleOpen]= useState(false);
  return (
    <header className='max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px] aftxl:max-w-[1320px] m-auto py-[24px] px-3'>
        <div className="container flex flex-wrap items-center">
            <Link href="/" className='py-[5px] mr-[16px]'>
                <Image src={logo} alt="logo" className='w-[118.84px] h-[42px]'/>
            </Link>
            <nav className={`${toggleOpen?"show":"hide"} aftmd:!animate-none order-6 aftmd:order-0 aftmd:flex-1 aftmd:flex aftmd:justify-end w-full pt-4 aftmd:pt-0`}>
                <ul className="links mr-4 aftmd:mr-4 p-0 aftmd:p-0 aftmd:flex md:p-[10px_15px_20px_15px] md:mr-0">
                    <li className='pr-4 h-[52px] flex items-center border-b-[1px] border-[#c7c8c9] aftmd:border-none'>
                        <Link href={"/"} className={`${path === "/"? "active":""} py-2 aftmd:p-2 text-[#000014] text-[15px] font-medium uppercase leading-[35px] w-full`}>home</Link>
                    </li>
                    <li className='pr-4 h-[52px] flex items-center border-b-[1px] border-[#c7c8c9] aftmd:border-none'>
                        <Link href={"/about"} className={`${path === "/about"? "active":""} py-2 aftmd:p-2 text-[#000014] text-[15px] font-medium uppercase leading-[35px] w-full`}>about us</Link>
                    </li>
                    <li className='pr-4 h-[52px] flex items-center border-b-[1px] border-[#c7c8c9] aftmd:border-none'>
                        <Link href={"/services"} className={`${path === "/services"? "active":""} py-2 aftmd:p-2 text-[#000014] text-[15px] font-medium uppercase leading-[35px] w-full`}>services</Link>
                    </li>
                    <li className='pr-4 h-[52px] flex items-center border-b-[1px] border-[#c7c8c9] aftmd:border-none'>
                        <Link href={"/cases"} className={`${path === "/cases"? "active":""} py-2 aftmd:p-2 text-[#000014] text-[15px] font-medium uppercase leading-[35px] w-full`}>case studies</Link>
                    </li>
                </ul>
                <div className="link-contact flex justify-center h-[47.425px] md:h-auto aftmd:h-[47.425px] self-center">
                    <Link href={"/contact"} className='bg-[#0043f1] hover:bg-[#f27405] transition-[background-color_0.3s] text-[16px] md:text-[14px] aftmd:text-[16px] leading-[21.43px] font-[600] text-center rounded-[30px] md:p-[10px_15px] aftmd:p-[13px_32px] p-[13px_32px] text-white uppercase'>contact us</Link>
                </div>
            </nav>
            <div className="toggle-menu flex-1 flex justify-end aftmd:hidden ">
                <div className="icon py-1 px-3  bg-[#0043f1] h-[39.6px] w-[55.6px] rounded-[6px] cursor-pointer" onClick={()=> setToggleOpen(!toggleOpen)}>
                    <svg className="size-6 w-[30px] h-[30px] text-[#ffffff8c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header