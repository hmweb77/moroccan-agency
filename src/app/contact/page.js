"use client"

import Navbar from '@/components/Navbar'
import React from 'react'
import QuoteSimulator from '@/components/Quote'
import Footer from '@/components/Footer'
import HeroContact from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'

export default function page() {
  return (
<>
<Navbar></Navbar>
<HeroContact></HeroContact>
<QuoteSimulator></QuoteSimulator>
<ContactForm></ContactForm>
<Footer></Footer>
</>
  )
}
