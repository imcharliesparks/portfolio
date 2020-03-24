import React, { ReactElement } from 'react'
import PageHelmet from './components/PageHelmet'
import Header from './components/Header'
import Slider from './components/Slider'
import Portfolio from './components/Portfolio'

const App = (): ReactElement => {
  return (
    <>
      <PageHelmet />
      <Header headerPosition="header--static" color="color-black" />
      {/* CS TODO: Update slider height for ipad pro */}
      <Slider />
      <Portfolio />
    </>
  )
}

export default App
