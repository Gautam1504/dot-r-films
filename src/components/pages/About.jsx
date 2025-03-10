import React from 'react'
import './About.css'
import Member1 from '../../assets/namit.jpg'
import Member2 from '../../assets/shivaji.jpg'
import Member3 from '../../assets/sagar.jpg'

const About = () => {
  const teamMembers=[
    {id:1,name:'Namit Naidu',role:'Producer',image:Member1},
    {id:2,name:'Shivaji Galewad',role:'Cinematographer',image:Member2},
    {id:3,name:'Sagar Ghimiray',role:'Cinematographer',image:Member3},
    {id:4,name:'Sagar Ghimiray',role:'Cinematographer',image:Member3},

  ]
  return (
    <div className='about-container'>
      <h1 className='about-title'>About Us</h1>
      <p className='about-description'>Welcome to DOT R FILMS, where creativity meets execution. With 6 years of experience in the industry, we specialize in video production, film shooting, idea conceptualization, video editing, motion graphics, and 2D. Based in Pune and Mumbai, our team of skilled professionals is passionate about bringing stories to life—whether it’s a high-end commercial, a captivating short film, or engaging digital content. Beyond production, we also offer expert consultation in film distribution and marketing, ensuring your project reaches the right audience. Let’s connect and create something amazing together. </p>

      <h2 className='team-title'>OUR TEAM</h2>

      <div className="team-members">
        {teamMembers.map((member)=>{
          return(
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} className='member-photo' />
              <h3 className='member-name'>{member.name}</h3>
              <p className='member-role'>{member.role}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default About
