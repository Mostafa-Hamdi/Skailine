import React from 'react'
import ContactBox from './ContactBox'
import { location,email } from '../assets'

const Locations = () => {
  return (
    <div className='locations py-12 md:py-20'>
        <div className="container max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto" >
        <div className="heading-section ">
            <h6 className='mb-0 p-[12px_35px_12px_20px] flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>CONTACT US</h6>
        </div>
        <h2 className='pt-6 mb-10 text-[36px] leading-[2.75rem] font-semibold'>We are always open 24/7 for you</h2>
        <div className="boxes md:flex">
            <ContactBox
                img= {location}
                head="Dubai Office"
                paragraph="Skailine Partners FZCODSO IFZA - Dubai Silicon Oasis Dubai, UAE"
                linkName="+971564400772"
            />
            <ContactBox
                img={location}
                head="Paris Office"
                paragraph="Skailine Partners 51, rue de Bellechasse 75007 Paris, France"
                linkName="+33785292992"
            />
            <ContactBox
                img={email}
                head="E-mail us"
                paragraph="We're committed to assisting you every step of the way"
                linkName="contact@skailinepartners.com"
            />
        </div>
        </div>
    </div>
  )
}

export default Locations