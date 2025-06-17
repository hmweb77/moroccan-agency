"use client"
import Navbar from '@/components/Navbar'
import React from 'react'

import Footer from '@/components/Footer'
import QuoteSimulatorPage from '@/components/QuotePage'

export default function page() {
  return (
<>
<Navbar></Navbar>
<QuoteSimulatorPage></QuoteSimulatorPage>
<Footer></Footer>
</>
  )
}
