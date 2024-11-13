import React from 'react'
import Banner from '../Components/Banner/Banner'
import Counter from '../Components/Counter/Counter'
import Features from '../Components/Features/Features'
import Pricing from '../Components/Pricing/Pricing'
import LasMap from '../Components/LasMap/LasMap'
import Customer from '../Components/Customer/Customer'
import Slider from 'react-slick'
import ClientSlide from '../Components/CustomerSlide/ClientSlide'

const Home = () => {
  return (
    <>
    <Banner />
    <Counter />
    <Features />
    <Pricing />
    <LasMap />
    <Customer />
    <ClientSlide />
    
    </>
  )
}

export default Home
