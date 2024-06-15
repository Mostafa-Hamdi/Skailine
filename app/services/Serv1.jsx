import Image from 'next/image'
import React from 'react'
import { serv1 } from '../assets'

const Serv = () => {
  return (
    <div className='serv py-12 md:py-20'>
        <div className="container md:flex max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <div className="image w-full md:flex-1 md:w-[calc(100%/3)] px-3">
                <Image src={serv1} alt='' className='w-full'/>
            </div>
            <div className="text md:w-[calc((100%/3)*2)] px-9">
                <div className="heading-section ">
                    <h6 className='mb-0 p-[12px_35px_12px_20px] text-wrap flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>TOGETHER WITH YOU, WE DEFINE THE MEANING OF SUCCESS…</h6>
                </div>
                <h2 className='text-[40px] font-semibold leading-[2.75rem] pt-6 md:pt-2 mb-4'>AI Strategy Development</h2>
                <ul className='mb-4 max-w-[850px] pl-8'>
                    <li className='relative pl-8 text-[#212529px] mb-4 font-[400]'>
                        <p className='mb-[4.8px]'><strong>Assess the maturity </strong>of your organisation with regards to eight dimensions and along five maturity levels of AI.</p>
                    </li>
                    <li className='relative text-[#212529px] pl-8 mb-4 font-[400] '>
                        <p className='mb-[4.8px]'>We <strong>educate your leadership </strong>on AI, its capabilities and limits, on the recipe of a successful AI transformation at scale and inspire with case studies from your and other industries, and on the regulatory and compliance aspects of AI.</p>
                    </li>
                    <li className='relative text-[#212529px] pl-8 mb-4 font-[400]'>
                        <p className='mb-[4.8px]'><strong>Frame your AI vision and strategy </strong>and align your leadership team around it as a North Star.</p>
                    </li>
                    <li className='relative text-[#212529px] pl-8 mb-4 font-[400]'>
                        <p className='mb-[4.8px]'><strong>Reimagine your business</strong> and identify its value levers, digital solutions and <strong>AI use cases.</strong> Prioritise your AI use cases ina value- feasibility matrix, their regulatory compliance and define KPIs.</p>
                    </li>
                    <li className='relative text-[#212529px] pl-8 mb-4 font-[400]'>
                        <p className='mb-[4.8px]'>Translate the results into a detailed <strong>AI transformation roadmap</strong> focused on deployment and maximizing business impact and clear about the capabilities needed to deliver it and the risk deploying it.</p>
                    </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Serv