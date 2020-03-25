import React, { ReactElement } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

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
                    <h2 className="title">About Me</h2>
                    <p className="description">
                      Charlie is a Full-Stack Web Developer and co-founder of e-sports web app, Plusframes.GG. He has
                      worked with myriad languages and frameworks, specializing in JavaScript-based technologies like
                      React, Node, and Meteor, and he has the ability to quickly adapt to new technologies in an ever
                      changing environment. As a graduate of The Lambda School's Full-Stack Web Development Academy, as
                      well as a BS/MA student at Antioch University Los Angeles, Charlie brings his unique blend of
                      technical expertise and passion for people to every team he works with.
                    </p>
                  </div>
                  <div className="row mt--30 tabs-area-container">
                    <div className="tabs-area">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <Tabs>
                              <TabList className="tab-style--1">
                                <Tab>Skills</Tab>
                                <Tab>Experience</Tab>
                                <Tab>Education</Tab>
                              </TabList>

                              {/* CS TODO: Set static height for about me so picture doesn't shift--only large devices */}
                              <TabPanel>
                                <div className="single-tab-content">
                                  <ul>
                                    <li>
                                      <span className="tab-content">
                                        React<span> - 2 years</span>
                                      </span>
                                      Professionally employed as a React developer and have used it as my primary tool
                                      for all projects since 2018. I've worked with numerous React-specific tools, such
                                      as Redux, Redux-Saga, React Testing Library, and more.
                                    </li>
                                    <li>
                                      <span className="tab-content">
                                        Node/Express<span> - 2 years</span>
                                      </span>
                                      Node and Express have been my goto backend tech for the past two years, and I have
                                      built servers and services with them (and Koa) and both of my previous jobs.
                                    </li>
                                    <li>
                                      <span className="tab-content">
                                        TypeScript<span> - 1 year</span>
                                      </span>
                                      I use TypeScipt at Kroger Digital, as well as in all of my side projects. I
                                      started using it last year in my personal projects and have never looked back.
                                    </li>
                                    <li>
                                      <span className="tab-content">
                                        HTML, CSS, and JavaScript<span> - 4 years </span>
                                      </span>
                                      Working with libraries such as jQuery, Knockout, and Bootstrap, as well as
                                      building static, responsive websites.
                                    </li>
                                  </ul>
                                </div>
                              </TabPanel>
                              <TabPanel>
                                <div className="single-tab-content">
                                  <ul>
                                    <li>
                                      <span className="tab-content">
                                        Kroger Digital<span> - November 2019 - Present</span>
                                      </span>
                                      At Kroger Digital I work on the ecosystem of applications that make their in-store
                                      pickup initiative possible, including their groundbreaking 1-hour Walgreens pickup
                                      service. In particular, I work on the progressive React/TypeScript PWA,
                                      Demeter--an application that helps employees fulfill user orders--and back-end
                                      services related to picking.
                                    </li>
                                    <li>
                                      <span className="tab-content">
                                        Outlier Technologies<span> - May 2019 - November 2019</span>
                                      </span>
                                      At Outlier Technologies I worked on their industry-standard inspections/reporting
                                      application, SansWrite, as well as developing custom applications used by state
                                      and local governments.
                                    </li>
                                    <li>
                                      <span className="tab-content">
                                        Academic Associates<span> - May 2015 - June 2018</span>
                                      </span>
                                      Academic Associates was where I first discovered my passion for web development. I
                                      was hired on as a general IT specialist, but transitioned to creating and
                                      maintaining their website when the need arose.
                                    </li>
                                  </ul>
                                </div>
                              </TabPanel>
                              <TabPanel>
                                <div className="single-tab-content">
                                  <ul>
                                    <li>
                                      <span className="tab-content">
                                        Antioch University<span> - In Progress</span>
                                      </span>
                                      I am candidate in Antioch's combined BA/MA fast track Clincial Psychology program,
                                      which leads to MFT licensure in the state of California.
                                    </li>
                                    <li>
                                      <span className="tab-content">
                                        Lambda School
                                        <span> - Graduated October 2018</span>
                                      </span>
                                      Lambda School is an intensive Computer Science program with emphasis on web
                                      development. I learned advanced JavaScript, React, Node/Express, CSS/Bootstrap,
                                      MongoDB/MySQL, Python/Django, and more during my time as a student there.
                                    </li>
                                    <li>
                                      <span className="tab-content">
                                        Mt. San Jacinto College
                                        <span> - Graduated May 2015</span>
                                      </span>
                                      I completed a AA in Social/Behavioral Science with honors in 2015 as an officer of
                                      the Phi Theta Kappa honors society.
                                    </li>
                                  </ul>
                                </div>
                              </TabPanel>
                            </Tabs>
                          </div>
                        </div>
                      </div>
                    </div>
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
