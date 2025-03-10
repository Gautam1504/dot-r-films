import React from 'react'
import Video from '../../assets/Showreel.webm'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video 
          className="hero-background" 
          autoPlay 
          muted 
          loop 
          playsInline
          controls={false}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Dot R Films</h1>
        <p className="hero-subtitle">Crafting Stories, Capturing Emotions.</p>
        <Link to='/Films'><button className="hero-cta">View Our Work</button></Link>
      </div>
    </section>
  )
}

export default Home
