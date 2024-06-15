import React from 'react'
import ReturnHome from '../about/ReturnHome'
import Recent from './Recent'

const page = () => {
  return (
    <div className='careers'>
        <ReturnHome pageName="AI Case Studies" heading="Case Studies"/>
        <Recent/>
    </div>
  )
}

export default page