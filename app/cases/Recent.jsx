import React from 'react'
import Case from './Case'
import CaseInfo from './CaseInfo'
import { case1, case2, case3 } from '../assets'

const Recent = () => {
  return (
    <div className='recent  py-12 md:py-20'>
        <div className="container flex flex-col aftmd:flex-row max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <div className="info px-3 order-2 aftmd:order-0 aftmd:w-[calc(100%/3)]">
                <h2 className='text-[#000014] pb-5 capitalize mb-8 text-[24px] leading-[24px] font-semibold relative'>Recent Case Studies</h2>
                <Case img={case1} link="revolutionising-marketing" caseName="Revolutionising Marketing Strategies in a Commoditised Market" date="April 24, 2024"/>
                <Case img={case2} link="innovation-driven" caseName="Innovation-driven demand planning" date="April 24, 2024"/>
                <Case img={case3} link="geospatial-sales" caseName="Geospatial Sales Optimization" date="April 3, 2024"/>
            </div>
            <div className="latest order-[0] aftmd:order-10 px-3 aftmd:flex-1">    
                <CaseInfo img={case1} lnk="revolutionising-marketing" caseName="Revolutionising Marketing Strategies in a Commoditised Market" info="In today’s fast-paced and highly competitive Fast-Moving Consumer Goods (FMCG) industry, staying ahead of the curve is not just an option but a necessity. Our latest collaboration with a  regional FMCG company exemplifies this ethos." date="April 24, 2024" link=""/>
                <CaseInfo img={case2} lnk="innovation-driven" caseName="Innovation-driven demand planning" info="In today’s fast-paced and highly competitive Fast-Moving Consumer Goods (FMCG) industry, staying ahead of the curve is not just an option but a necessity. Our latest collaboration with a  regional FMCG company exemplifies this ethos." date="April 24, 2024"  link=""/>
                <CaseInfo img={case3} lnk="geospatial-sales" caseName="Geospatial Sales Optimization" info="In today’s fast-paced and highly competitive Fast-Moving Consumer Goods (FMCG) industry, staying ahead of the curve is not just an option but a necessity. Our latest collaboration with a  regional FMCG company exemplifies this ethos." date="April 3, 2024"  link=""/>
            </div>
        </div>
    </div>
  )
}

export default Recent