"use client"
import HeroExpertise from '@/components/services/HeroExpertise'
import OurExpertise from '@/components/services/OurExpertise'
import Navbar from '@/components/Navbar'
import React from 'react'
import QuoteSimulator from '@/components/Quote'
import NosServicesComponent from '@/components/services/NosServices'
import Footer from '@/components/Footer'

export default function page() {
  return (
<>
<Navbar></Navbar>
<HeroExpertise></HeroExpertise>
<QuoteSimulator></QuoteSimulator>
<OurExpertise></OurExpertise>
<NosServicesComponent></NosServicesComponent>
<Footer></Footer>
</>
  )
}
