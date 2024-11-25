import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import InformationSection from './components/InformationSection'
import ServiceSection from './components/ServiceSection'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedSection/>
      <InformationSection/>
      <ServiceSection/>
    </div>
  )
}

export default page
