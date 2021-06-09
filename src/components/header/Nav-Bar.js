import React from 'react'
import ReactLogo from './logo.svg'
import "./style/Nav-Bar.css"

export const Nav_Bar = () => {
  return (
    <div className="header-navBar">
      <div className="fylo-logo">
        <img src={ReactLogo}  alt="Fylo Logo"></img>
      </div>
      <div className="menu-section" >
        <ul>
          <li><a>Feature</a></li>
          <li><a>Team</a></li>
          <li><a>Sign In</a></li>
        </ul>
      </div>
    </div>
  )
}
