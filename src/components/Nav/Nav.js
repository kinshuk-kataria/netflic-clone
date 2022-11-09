import React, { useState, useEffect } from 'react'
import './nav.css'
import logo from '../../assets/Netflix_Logo.png'
import avatar from '../../assets/Netflix-avatar.png'

function Nav() {
  const [render, handleRender] = useState(false)

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleRender(true)
    } else {
      handleRender(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)

    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${render && 'nav__black'}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={logo} alt="netflix logo" />
        <img className="nav__avatar" src={avatar} alt="avatar" />
      </div>
    </div>
  )
}

export default Nav
