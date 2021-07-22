import React, { ReactElement } from 'react'

const About = (): ReactElement => {
  return (
    <section id="about" className="fix">
      <div className="about-area ptb--60 bg_color--1">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--45 align-items-center">
              <div className="col-lg-5">
                <div style={{ maxWidth: 400, margin: '0 auto' }} className="thumbnail">
                  <img className="w-100" src={require('../assets/images/with-doobs-2.jpg')} alt="About Images" />
                </div>
              </div>
              <div style={{ paddingLeft: 0, paddingRight: 0 }} className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About</h2>
                    <p className="description">
                      Charlie is a senior software engineer, musician, and psychology student. He has worked with many
                      different languages and frameworks, specializing in JavaScript-based technologies like React,
                      Node, and Meteor. Charlie has the ability to quickly adapt to new technologies in an ever changing
                      environment and has proven an invaluable asset to the companies he's worked with. As a graduate of
                      The Lambda School's Full-Stack Web Development Academy, as well as a BS/MA student at Antioch
                      University Los Angeles, Charlie brings his unique blend of technical expertise and passion for
                      people to every team he works with.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
