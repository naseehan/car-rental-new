import React from 'react'
import Banner from '../components/Banner'
import Booking from '../components/Booking'
import CarModels from '../components/CarModels'
import Choose from '../components/Choose'
import Download from '../components/Download'
import FAQ from '../components/FAQ'
import Intro from '../components/Intro'
import Reviews from '../components/Reviews'
import Specs from '../components/Specs'

function Home() {
  return (
    <>
    <Intro />
    <Booking />
    <Specs />
    <CarModels />
    <Banner />
    <Choose />
    <Reviews />
    <FAQ />
    <Download />
    </>
  )
}

export default Home
