import React, { ReactElement } from 'react'

const About = (): ReactElement => {
  return (
    <div id="about" className="fix">
      <div className="about-area ptb--120  bg_color--1">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img className="w-100" src={require('../assets/images/about/about-7.jpg')} alt="About Images" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About</h2>
                    <p className="description">
                      Charlie is a Full-Stack Web Developer and co-creator of e-sports web app, Plusframes.GG. He has
                      worked with many different languages and frameworks, specializing in JavaScript-based technologies
                      like React, Node, and Meteor. Charlie has the ability to quickly adapt to new technologies in an
                      ever changing environment, and has proven an invaluable asset to the companies he's worked with.
                      As a graduate of The Lambda School's Full-Stack Web Development Academy, as well as a BS/MA
                      student at Antioch University Los Angeles, Charlie brings his unique blend of technical expertise
                      and passion for people to every team he works with.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
