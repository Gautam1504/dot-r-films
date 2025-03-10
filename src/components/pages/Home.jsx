import React from 'react'
import Video from '../../assets/Showreel.mp4'
import './Home.css'


const Home = () => {
  
  return (
    <div className='home'>
      <video className='background-video' loop autoPlay muted>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Home
