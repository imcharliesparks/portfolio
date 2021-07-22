import * as React from 'react'
import PageHelmet from './components/PageHelmet'
import Header from './components/Header'
import Slider from './components/Slider'
// import Portfolio from './components/Portfolio'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import ScrollArrow from './components/ScrollArrow'

const App = (): React.ReactElement => {
  return (
    <>
      <PageHelmet />
      <Header headerPosition="header--static" color="color-black" />
      {/* CS TODO: Update slider height for ipad pro */}
      <Slider />
      {/* <Portfolio /> */}
      <About />
      <Experience />
      <Footer />
      {/* TODO: Make transition from show to hide more smooth */}
      <ScrollArrow />
    </>
  )
}

export default App
