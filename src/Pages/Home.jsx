import React from 'react'
// import Footer from '../Components/shared/footer'
import Header from '../Components/shared/Header'
import NewsLayout from '../Components/shared/NewsLayout'
import HealthSection from '../Components/shared/HealthSection'
import Topstories from '../Components/shared/Topstories'
import Businsess from '../Components/shared/Business'
import World from '../Components/shared/World'
function Home() {
  return (
    <div>
      <Header/>
      <NewsLayout/>
      <HealthSection/>
      <Topstories/>
      <Businsess/>
      <World/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
