import React from 'react'
import './header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
    {/*logo */}
    <Logo/>

    {/*search */}
    <SearchBar/>
    {/*logo */}
    </header>
  )
}

export default Header