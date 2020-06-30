import React, { ReactElement } from 'react'
import TextLoop from 'react-text-loop'

const Slider = (): ReactElement => {
  return (
    <section id="slider" className="slider-wrapper">
      <div className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 designer-thumbnail-container">
              <div className="designer-thumbnail">
                <img src={require('../assets/images/wedding suit circular.png')} alt="Slider Images" />
              </div>
            </div>
            <div className="col-lg-7 mt_md--40 mt_sm--40">
              <div className="inner text-left">
                <h1 className="title">
                  Hi, I’m Charlie Sparks,
                  <br />
                  <TextLoop>
                    <span> Full-Stack Developer. </span>
                    <span> Software Engineer. </span>
                    <span> Front-End Developer. </span>
                  </TextLoop>{' '}
                </h1>
                {/* <h2>based in USA.</h2> */}
                <span>Cincinnati, Ohio</span>
                {/* {value.description ? <p className="description">{value.description}</p> : ''}
                {value.buttonText ? (
                  <div className="slide-btn">
                    <a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>
                      {value.buttonText}
                    </a>
                  </div>
                ) : (
                  ''
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
