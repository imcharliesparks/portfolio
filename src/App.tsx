import React, { ReactElement } from 'react'
import PageHelmet from './components/PageHelmet'
import Header from './components/Header'

const App = (): ReactElement => {
  return (
    <>
      <PageHelmet />
      <Header headerPosition="header--static" color="color-black" />
    </>
  )
}

export default App
