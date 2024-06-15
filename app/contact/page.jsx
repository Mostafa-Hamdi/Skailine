import React from 'react'
import ReturnHome from '../about/ReturnHome'
import Locations from './Locations'
import ContactForm from './ContactForm'

const page = () => {
  return (
    <div className='contact-section'>
        <ReturnHome pageName="Contact Us" heading="Contact Us"/>
        <Locations/>
        <ContactForm/>
    </div>
  )
}

export default page