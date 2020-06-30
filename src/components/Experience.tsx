import React, { ReactElement } from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

// set height
// set background color
const Experience = (): ReactElement => {
  return (
    <section style={{ minHeight: 916 }}  id="experience" className="designer-portfolio-area ptb--40 bg_color--5">
      <div className="wrapper plr--70 plr_sm--30">
        <Tabs>
          <div className="row text-center">
            <h2 style={{ margin: '0 auto 20px auto' }}>Curriculum Vitae</h2>
            <div className="col-lg-12">
              <div className="tablist-inner">
                <TabList className="pv-tab-button text-center mt--0">
                  <Tab>
                    <span>Skills</span>
                  </Tab>
                  <Tab>
                    <span>Experience</span>
                  </Tab>
                  <Tab>
                    <span>Education</span>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>
          <TabPanel style={{ maxWidth: 575, margin: '0 auto', padding: '0 25px' }} className="row row--35">
            <div className="single-tab-content">
              <ul>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    JavaScript/TypeScript
                    <br />
                    <span style={{ fontWeight: 400 }}>5 Years</span>
                  </span>
                  I've worked building modern applications using both JavaScript and TypeScript for a few years now.
                  I have experience with multiple JS-based libraries and frameworks such as React, Meteor, Vue, jQuery, and Knockout.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    React
                    <br />
                    <span style={{ fontWeight: 400 }}>3 Years</span>
                  </span>
                  React has been my go-to solution for all front-end projects for the past 3 years.
                  I've worked with numerous React-specific tools, such as React-Native, Redux, Redux-Saga, React Router, Material UI,
                  Reactstrap, Jest, React Testing Library, and more.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    HTML and CSS
                    <br />
                    <span style={{ fontWeight: 400 }}>5 Years</span>
                  </span>
                  I have been programming in HTML/CSS for 10 years, and started using them in a professional capacity
                  around 5 years ago. I've worked developing myriad responsive static and dynamic websites in a variety
                  of contexts.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Node/Express
                    <br />
                    <span style={{ fontWeight: 400 }}>3 Years</span>
                  </span>
                  Node and Express have been my choice back-end tech for the past 3 years, and I have built servers and
                  services with them, as well as Koa, at both of my previous jobs. I have experience with full back-end unit testing using
                  Mocha, Chai, and Jest, and have worked with both SQL and NoSQL databases.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Other Technologies
                    <br />
                    <span style={{ fontWeight: 400 }}>3 Years</span>
                  </span>
                  I have worked with many other technologies, including the following:
                  VueJS, Swift, PHP/Laravel, Java/Kotlin/Spring Boot, Python/Django, 
                  WordPress, MongoDB, Microsoft SQL Server, SQLite3, 
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel style={{ maxWidth: 575, margin: '0 auto', padding: '0 25px' }} className="row row--35">
            <div className="single-tab-content">
              <ul>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Kroger Digital
                    <br />
                    <span style={{ fontWeight: 400 }}>November 2019 - Present</span>
                  </span>
                  At Kroger Digital I work on the ecosystem of applications that make their in-store pickup initiative
                  possible, including their groundbreaking 1-hour Walgreens pickup service, and first pickup and delivery 
                  only store. In particular, I work on two React/TypeScript PWAs, Demeter and Harvester--applications
                  that helps employees fulfill user orders--and back-end services related to picking.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Outlier Technologies
                    <br />
                    <span style={{ fontWeight: 400 }}>May 2019 - November 2019</span>
                  </span>
                  During my time with Outlier Technologies I worked on their industry-standard inspections/reporting application,
                  SansWrite, as well as developed custom web applications used by many organizations, including 
                  state and local governments.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Colors Youth Counseling Center
                    <br />
                    <span style={{ fontWeight: 400 }}>June 2016 - March 2017</span>
                  </span>
                  Colors hired me on to work on their WordPress website and blog, as well as to do general
                  IT work for the whole organization, including SEO optimization and social media outreach.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Academic Associates
                    <br />
                    <span style={{ fontWeight: 400 }}>June 2011 - June 2015</span>
                  </span>
                  At Academic Associates, I wrote and maintained their primary website and helped optimize their online
                  presence. I also handled all other IT duties throughout their organization.
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel style={{ maxWidth: 575, margin: '0 auto', padding: '0 25px' }} className="row row--35">
            <div className="single-tab-content">
              <ul>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Lambda School
                    <br />
                    <span style={{ fontWeight: 400 }}>Graduated October 2018</span>
                  </span>
                  Graduate of Lambda School's intensive Computer Science program with emphasis on web
                  development. I learned advanced JavaScript, React, Node/Express, CSS/Bootstrap, MongoDB/MySQL,
                  Python/Django, and more during my time as a student there.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Antioch University
                    <br />
                    <span style={{ fontWeight: 400 }}>In Progress</span>
                  </span>
                  Candidate in Antioch's combined BA/MA fast track Clincial Psychology program, which leads to MFT
                  licensure in the state of California.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Mt. San Jacinto College
                    <br />
                    <span style={{ fontWeight: 400 }}>Graduated May 2015</span>
                  </span>
                  Completed a AA in Social/Behavioral Science with honors in 2015 as an officer of the prestigous Phi
                  Theta Kappa honors society.
                </li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default Experience
