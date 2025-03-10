import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.png'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <p>© {new Date().getFullYear()} Dot R Films. All Rights Reserved</p>
    
        <div className="social">
            <a href="https://www.instagram.com/dotrfilms?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram size={40}/></a>
            <a href="https://www.linkedin.com/in/namitnaidu/"><FaLinkedin size={40}/></a>

        </div>
    </footer>
  )
}

export default Footer
