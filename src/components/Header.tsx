import React, { ReactElement } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll'
import StyledBurger from './StyledBurger'

type HeaderProps = {
  headerPosition: string
  color: string
}

const Header = ({ headerPosition, color }: HeaderProps): ReactElement => {
  const headerWrapperRef = React.useRef<HTMLDivElement>(null)
  const hambugerButtonRef = React.useRef<HTMLButtonElement>(null)

  const menuTrigger = (): void => {
    headerWrapperRef.current?.classList.toggle('menu-open')
    hambugerButtonRef.current?.classList.toggle('is-active')
  }

  return (
    <header style={{ height: '10vh' }} className={`header-area formobile-menu ${headerPosition} ${color}`}>
      <div ref={headerWrapperRef} className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <img style={{ maxWidth: 50 }} src={require('../assets/images/logo.png')} alt="The Sparks Full-Stack Logo" />
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li>
                <AnchorLink onClick={menuTrigger} href="#about">About</AnchorLink>
              </li>
              <li>
                <AnchorLink onClick={menuTrigger} href="#experience">Experience</AnchorLink>
              </li>
              {/* <li>
                <a onClick={menuTrigger} href="#content">Projects</a>
              </li> */}
              <li>
                <AnchorLink onClick={menuTrigger} href="#contact">Contact</AnchorLink>
              </li>
            </ul>
          </nav>
          {/* TODO: Change to transitioning header */}
          <div style={{ zIndex: 999 }} className="d-block d-lg-none pl--20">
              <button onClick={menuTrigger} ref={hambugerButtonRef} className="hamburger hamburger--squeeze" type="button">
                  <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                  </span>
              </button>
            {/* <span style={{opacity: '1 !important'}} className="menutrigger text-white">
              <button onClick={menuTrigger} ref={hambugerButtonRef} className="hamburger hamburger--squeeze" type="button">
                  <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                  </span>
              </button>
            </span> */}
          </div>
          {/* <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div> */}
        </div>
      </div>
    </header>
  )
}
export default Header
