import React from 'react'
import './App.css'
import About from './containers/about/About'
import Faq from './containers/faq/Faq'
import Hero from './containers/hero/Hero'
import Stats from './containers/stats/Stats'
import Trending from './containers/trending/Trending'

function App() {
  return (
    <>
      <Hero />
      <About />
      <Trending />
      <Stats />
      <Faq />
    </>
  )
}

export default App
