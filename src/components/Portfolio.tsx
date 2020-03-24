import React, { ReactElement } from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

const Portfolio = (): ReactElement => {
  return (
    <div className="designer-portfolio-area ptb--120 bg_color--1">
      <div className="wrapper plr--70 plr_sm--30 plr_md--30">
        <Tabs>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tablist-inner">
                <TabList className="pv-tab-button text-center mt--0">
                  <Tab>
                    <span>About</span>
                  </Tab>
                  <Tab>
                    <span>Projects</span>
                  </Tab>
                  <Tab>
                    <span>Experience</span>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>
          <TabPanel className="row row--35"></TabPanel>
          <TabPanel className="row row--35"></TabPanel>
          <TabPanel className="row row--35"></TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Portfolio
