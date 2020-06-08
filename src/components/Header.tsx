import React, { ReactElement } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

type HeaderProps = {
  headerPosition: string
  color: string
}

const Header = ({ headerPosition, color }: HeaderProps): ReactElement => {
  const headerWrapperRef = React.useRef<HTMLDivElement>(null)

  const menuTrigger = (): boolean | undefined => headerWrapperRef.current?.classList.toggle('menu-open')
  const closeMenuTrigger = (): void | undefined => headerWrapperRef.current?.classList.remove('menu-open')

  return (
    <header style={{ height: '10vh' }} className={`header-area formobile-menu ${headerPosition} ${color}`}>
      <div ref={headerWrapperRef} className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <img src={require('../assets/images/logo/logo-symbol-dark.png')} alt="The Sparks Full-Stack Logo" />
          </div>
        </div>
        {/* <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#content">Projects</a>
              </li>
              <li>
                <a href="#content">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div> */}
      </div>
    </header>
  )
}
export default Header
