import React, { ReactElement } from 'react'
import PageHelmet from './components/PageHelmet'
import Header from './components/Header'
import Slider from './components/Slider'

const App = (): ReactElement => {
  return (
    <>
      <PageHelmet />
      <Header headerPosition="header--static" color="color-black" />
      <Slider />
    </>
  )
}

export default App
