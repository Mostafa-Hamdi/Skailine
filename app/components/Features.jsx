import React from 'react'
import Box from './Box'
import { floating1, floating2, floating3, floating4,arrowRight, floating5, floating6, floating7, floating8 } from '../assets'
import Image from 'next/image'
import Link from 'next/link'
const Features = () => {
  return (
    <div className='features'>
        <div className="section-1">
            <div className="container md:mt-20 aftxl:mt-0 aftxl:translate-y-[-100%] aftxl:h-[200px] relative z-10 md:flex md:flex-wrap md:justify-between  max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <Box    
                        link="/services"
                        img={floating1} 
                        heading="AI Strategy"
                        heading2="Development"
                        paragraph="Develop your AI, GenAI strategy and AI roadmap"
                    />
                    <Box 
                        link="/services"
                        img={floating2}
                        heading="AI Design And Implementation"
                        paragraph="Design and build your AI capabilities and application"
                    />
                    <Box
                        link="/services" 
                        img={floating3}
                        heading="AI Adaption And Value Realization"
                        paragraph="Unlock your data potential, scale and measure realized value"
                    />
                    <Box 
                        link="/services"
                        img={floating4}
                        heading="Change Management & Governance"
                        paragraph="Operationalize AI, train and develop AI competencies"
                    />
            </div>
        </div>
        <div className="section-2 py-12 md:py-20">
            <div className="container md:flex md:flex-wrap md:justify-between  max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
                <div className="section-1 md:w-[calc(100%/3)] mb-12 pr-6">
                    <div className="heading-section ">
                        <h6 className='mb-0 p-[12px_35px_12px_20px] flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>WHY US?</h6>
                    </div>
                    <h2 className='pt-6 mb-2 text-[36px] font-semibold leading-[2.75rem]'>We help you leverage AI as a strategic asset</h2>
                    <div className="nav-link pt-4 h-full flex">
                        <Link href="" className='mt-auto flex justify-center md:justify-start relative items-center text-[#0043f1] text-[18px] font-medium leading-[18px] hover:opacity-75 capitalize'>
                            about us
                            <Image src={arrowRight} alt="arrow-right" className="ml-2 w-[16px] h-[16px] text-[#0043f1] text-[18px] font-medium leading-[18px]"/>   
                        </Link>
                    </div>
                </div>
                <div className="section-2 md:flex-1 md:flex md:flex-wrap">
                    <Box
                        img={floating5} 
                        heading="Attentive Listening"
                        paragraph="Your needs comes first but be prepared to be challenged"
                    />
                    <Box 
                        img={floating6}
                        heading="Design-Driven Approach"
                        paragraph="Our workshops are inclusive, collaborative and human-centric"
                    />
                    <Box 
                        img={floating7}
                        heading="Efficiency and Impact"
                        paragraph="Our engagements are tailored, impactful and time-bound"
                    />
                    <Box 
                        img={floating8}
                        heading="Extensive Network Access"
                        paragraph="Tap into a diverse network of experts with global and local experience"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features 