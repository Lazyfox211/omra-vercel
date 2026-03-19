'use client'

import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Includes from '../components/Includes'
import Mehdi from '../components/Mehdi'
import Programme from '../components/Programme'
import Prix from '../components/Prix'
import Reservation from '../components/Reservation'
import { Faq, Footer, StickyBar } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <Stats />
        <Includes />
        <Mehdi />
        <Programme />
        <Prix />
        <Reservation />
        <Faq />
        <Footer />
      </main>
      <StickyBar />
    </>
  )
}
