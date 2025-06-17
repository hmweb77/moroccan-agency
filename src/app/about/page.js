"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import HeroAbout from '@/components/about/HeroAbout'
import QuoteSimulator from '@/components/Quote'
import NumbersComponent from '@/components/about/NumbersComponent'
import ValueComponent from '@/components/about/ValueComponent'
import CTAComponent from '@/components/about/CTAComponent'
import Footer from '@/components/Footer'

export default function page() {
  return (
<>
<Navbar></Navbar>
<HeroAbout></HeroAbout>
<QuoteSimulator></QuoteSimulator>
<NumbersComponent></NumbersComponent>
<ValueComponent></ValueComponent>
<CTAComponent></CTAComponent>
<Footer></Footer>
</>
  )
}
