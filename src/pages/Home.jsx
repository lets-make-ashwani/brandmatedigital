import React from 'react'
import Hero from '../components/Hero/Hero'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Services from '../components/Services/Services'
import ClientLogos from '../components/ClientLogos/ClientLogos'
import Testimonials from '../components/Testimonials/Testimonials'
import FinalCTA from '../components/FinalCTA/FinalCTA'

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <ClientLogos />
      <Testimonials />
      <FinalCTA />
    </>
  )
}

export default Home
