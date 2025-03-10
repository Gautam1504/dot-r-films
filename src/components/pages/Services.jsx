import React from 'react'
import './Service.css'
import { FaVideo, FaFilm } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id:1,
      title:"Video Editing",
      description: "Editing is more than just cutting footage—it’s about crafting a seamless visual story. Our expert editors, skilled in Adobe Premiere Pro, After Effects, Final Cut Pro X, and DaVinci Resolve, bring precision, creativity, and technical expertise to every project. Whether it’s a high-energy commercial, a cinematic short film, or a compelling corporate video, we ensure every frame flows perfectly.",
      icon: <FaVideo/>,
    },
    {
      id:2,
      title:"Film Shooting",
      description: "From location scouting to cinematography, we provide end-to-end film shooting services, working with some of the finest cinematographers in Mumbai. Whether you need a dynamic, handheld documentary style or a high-end cinematic production, we bring the right tools, talent, and vision to make your project visually stunning.",
      icon: <FaFilm/>,
    },
  ];

  return (
    <section className='service-section'>
      <h2>Our Services</h2>
      <div className="service-container">
        {
          services.map((service)=>{
            return(
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services
