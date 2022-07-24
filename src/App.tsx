import React from 'react'
import './App.css'
import About from './containers/about/About'
import Faq from './containers/faq/Faq'
import Hero from './containers/hero/Hero'
import Partners from './containers/partners/Partners'
import Stats from './containers/stats/Stats'
import Testimonial from './containers/testimonial/Testimonial'
import Trending from './containers/trending/Trending'

function App() {
  return (
    <>
      <Hero />
      <About />
      <Trending />
      <Stats />
      <Faq />
      <Testimonial />
      <Partners />
    </>
  )
}

export default App
