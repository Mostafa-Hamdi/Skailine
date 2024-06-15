import React from 'react'
import ReturnHome from '../about/ReturnHome'
import AiSection from './AiSection'
import Engagement from './Engagement'
import Serv from './Serv1'
import Serv2 from './Serv2'
import Serv3 from './Serv3'
import Serv4 from './Serv4'
const page = () => {
  return (
    <div className='services'>
        <ReturnHome pageName="Our Services" heading="Our Services"/>
        <AiSection/>
        <Serv/>
        <Serv2/>
        <Serv3/>
        <Serv4/>
        <Engagement/>
    </div>
  )
}

export default page