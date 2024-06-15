import Link from 'next/link'
import React from 'react'

const Book = () => {
  return (
    <div className='book py-12'>
        <div className="container px-3 mx-auto  max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px] aftxl:max-w-[1320px]">
            <div className="content p-[7%_48px] min-h-[400px] scr800:min-h-[10rem] flex justify-center items-start flex-col rounded-2xl w-full">
                <h2 className='mb-10 pt-[1px] text-[2.5rem] font-[400] text-white leading-[2.75rem]'>
                    Ready to unlock the power
                    <br />
                    of AI for {" "} 
                    <b>your business?</b>
                </h2>
                <div className="link">
                    <Link href="" className='flex max-h-[52px]  justify-center items-center font-medium uppercase text-[1rem] text-[#f27405] bg-white rounded-[1.5rem] p-[17px_43.88px_17px_44px]'>book a call</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book