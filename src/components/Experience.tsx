import React, { ReactElement } from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

// set height
// set background color
const Experience = (): ReactElement => {
  return (
    <div className="designer-portfolio-area ptb--80 bg_color--5">
      <div className="wrapper plr--70 plr_sm--30 plr_md--30">
        <Tabs>
          <div className="row text-center">
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
          {/* CS TODO: Make this padding on on large? */}
          <TabPanel style={{ padding: '0 25px' }} className="row row--35">
            <div className="single-tab-content">
              <ul>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    React
                    <br />
                    <span style={{ fontWeight: 400 }}>2 Years</span>
                  </span>
                  I'm professionally employed as a React developer, and have used it as my primary tool for all projects
                  since 2018. I've worked with numerous React-specific tools, such as Redux, Redux-Saga, Material UI,
                  Reactstrap, React Testing Library, and more.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Node/Express
                    <br />
                    <span style={{ fontWeight: 400 }}>2 Years</span>
                  </span>
                  Node and Express have been my goto backend tech for the past two years, and I have built servers and
                  services with them (and Koa) at both of my previous jobs. I also have experience with both SQL and
                  NoSQL databases.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    TypeScript
                    <br />
                    <span style={{ fontWeight: 400 }}>1 Year</span>
                  </span>
                  I use TypeScipt at Kroger Digital as well as in all of my side projects. I started using it last year
                  in my personal work and have never looked back.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    HTML, CSS, and JavaScript
                    <br />
                    <span style={{ fontWeight: 400 }}>4 Years</span>
                  </span>
                  I have worked building static, responsive, and modern websites using these vanilla technologies, as
                  well as with libraries such as jQuery, Knockout, and Bootstrap.
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel style={{ padding: '0 25px' }} className="row row--35">
            <div className="single-tab-content">
              <ul>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Kroger Digital
                    <br />
                    <span style={{ fontWeight: 400 }}>November 2019 - Present</span>
                  </span>
                  At Kroger Digital I work on the ecosystem of applications that make their in-store pickup initiative
                  possible, including their groundbreaking 1-hour Walgreens pickup service. In particular, I work on the
                  progressive React/TypeScript PWA, Demeter--an application that helps employees fulfill user
                  orders--and back-end services related to picking.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Outlier Technologies
                    <br />
                    <span style={{ fontWeight: 400 }}>November 2019 - Present</span>
                  </span>
                  At Outlier Technologies I worked on their industry-standard inspections/reporting application,
                  SansWrite, as well as developed custom applications used by state and local governments.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Academic Associates
                    <br />
                    <span style={{ fontWeight: 400 }}>November 2019 - Present</span>
                  </span>
                  Academic Associates was where I first discovered my passion for web development. I was hired on as a
                  general IT specialist, but transitioned to creating and maintaining their website when the need arose.
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel style={{ padding: '0 25px' }} className="row row--35">
            <div className="single-tab-content">
              <ul>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Antioch University
                    <br />
                    <span style={{ fontWeight: 400 }}>In Progress</span>
                  </span>
                  I am candidate in Antioch's combined BA/MA fast track Clincial Psychology program, which leads to MFT
                  licensure in the state of California.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Lambda School
                    <br />
                    <span style={{ fontWeight: 400 }}>Graduated October 2018</span>
                  </span>
                  I am a graduate of Lambda School's intensive Computer Science program with emphasis on web
                  development. I learned advanced JavaScript, React, Node/Express, CSS/Bootstrap, MongoDB/MySQL,
                  Python/Django, and more during my time as a student there.
                </li>
                <li>
                  <span style={{ fontWeight: 600 }} className="tab-content">
                    Mt. San Jacinto College
                    <br />
                    <span style={{ fontWeight: 400 }}>Graduated May 2015</span>
                  </span>
                  I completed a AA in Social/Behavioral Science with honors in 2015 as an officer of the prestigous Phi
                  Theta Kappa honors society.
                </li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Experience
