import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
      <nav className="navbar">
        <Link to='/'><h1 className='logo-text'>DOT R FILMS</h1></Link>

        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
          <li><NavLink to='/home' onClick={isOpen}>Home</NavLink></li>
          <li><NavLink to='/films' onClick={isOpen}>Films</NavLink></li>
          <li><NavLink to='/services' onClick={isOpen}>Services</NavLink></li>
          <li><NavLink to='/about' onClick={isOpen}>About</NavLink></li>
          <li><NavLink to='/contact' onClick={isOpen}>Contact</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbar
