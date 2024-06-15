import React from 'react'
import ReturnHome from './ReturnHome'
import Mission from './Mission'
import Global from './Global'
import Team from './Team'

const page = () => {
  return (
    <div className='about-page'>
        <ReturnHome pageName="about us" heading="about us"/>
        <Mission/>
        <Team/>
        <Global/>
    </div>
  )
}

export default page