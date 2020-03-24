import React, { ReactChild } from 'react'
import { Helmet } from 'react-helmet'

const PageHelmet = (): ReactChild => {
  return (
    <Helmet>
      <title>Sparks Full-Stack: Full-Stack Web Development Solutions</title>
      <meta
        name="description"
        content="Sparks Full-Stack provides clients with high quality web and mobile apps built with speed and precision by experienced developers."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
    </Helmet>
  )
}

export default PageHelmet
