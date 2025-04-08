import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">DOT R FILMS</h3>
          <p className="footer-text">STORIES WELL TOLD</p>
          <p className="footer-text">London Area, United Kingdom</p>
          <p className="footer-text">enquiries@dotrfilms.com</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Navigation</h4>
          <div className="footer-links-grid">
            <a href="/home" className="footer-link">Home</a>
            <a href="/films" className="footer-link">Films</a>
            <a href="/services" className="footer-link">Services</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Connect With Us</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/dotrfilms/" className="social-icon" aria-label="Instagram">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/namitnaidu/" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.youtube.com/@dotrfilms" className="social-icon" aria-label="YouTube">
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} DOT R FILMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;