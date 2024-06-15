import React from 'react'
import Person from './Person'
import { person1, person2, person3, person4 } from '../assets'

const Team = () => {
  return (
    <div className='team py-12 md:py-20'>
        <div className="container max-w-[540px] px-9 md:px-3 md:max-w-[100%] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <div className="section-name">
                <h6 className='mb-0 p-[0px_35px_0px_15px] flex items-center text-[#3a3a3a] text-[12px] uppercase tracking-[1px] font-[700] h-[40px] bg-[#f2f5fe] relative  w-max rounded-[40px]'>OUR TEAM</h6>
            </div>
            <h2 className='pt-6 md:pt-2 mb-12 text-[36px] font-semibold leading-[2.75rem]'>World-class ambitions demand world-class experts. Our team's collective experience is our cornerstone.</h2>
            <div className="people scr493:flex  gap-6 flex-wrap" >
                <Person
                    paragraph1="CEO & founder"
                    name="Dr Hisham Maya"
                    img={person1}
                />
                <Person
                    paragraph1="Alliance Partner"
                    name="Michel Sérié"
                    img={person2}
                />
                <Person
                    paragraph1="Alliance Partner"
                    name="Emmanuelle Morice"
                    img={person3}
                />
                <Person
                    paragraph1="Alliance Partner"
                    name="Steven Wright"
                    img={person4}
                />
            </div>
        </div>
    </div>
  )
}

export default Team