import React from 'react'
import '../styles/header.css'
import Logo from './Logo'

import Nav from './Nav'

function Header  ()  {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
    {/*logo */}
    <Logo/>   
    {/*nav */}
    <Nav/>
    </header>
  )
}

export default Header