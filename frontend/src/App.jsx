import React from 'react'
import Navbar from './componenet/Navbar'
import Hero from './componenet/Hero'
import SearchBox from './componenet/SearchBox'
import Card from './componenet/Card'

import SecurityCards from './componenet/SecurityCard'
import SecuritySection from './componenet/SecuritySection'
import Fotter from './componenet/Fotter'
import Faqs from './componenet/Faqs'
import Feature from './componenet/Feature'
import Banner from './componenet/Banner'

function App() {
  return (
    <>
   
      <Navbar />
      <Hero />
      <SearchBox />/
      <Card />
    <SecuritySection />
    <Banner />
    <Feature />
    <Faqs/>
    <Fotter />

   
    </>
    
  )
}

export default App