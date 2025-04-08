import React from 'react'
import  './Films.css'
import image1  from '../../assets/Video 1.webp'
import image2  from '../../assets/Video 2.webp'
import image3  from '../../assets/Video 3.webp'
import image4  from '../../assets/Video 4.webp'



const Films = () => {
  const films =[
    {
      title:'BE RAKABI',
      description:"A Gujrati short film (biopic) that narrates the impressions of ordinary acts of a lady leaving an extraordinary impact on the lives of her loved ones.",
      image: image1,
      url:'https://youtu.be/8iHA53Q8m-s'
    },
    {
      title:'SHADES OF LOVE',
      description:"Proud to present Shades of Love our 1-minute film that captured hearts and secured 3rd place from 15 entries at the Producers Forum  01 Min Short Film Competition.",
      image: image2,
      url:'https://youtu.be/zoU4qdiGQxI'
    },
    {
      title:'FREAKIN JEANS AD',
      description:"This ONE-SHOT commercial for jeans is meant to grab the youth's attention. While the commercial is quirky, youthful, and full of drama, the focus on the jeans is never lost. The film shows the flexibility, comfort, and style the jeans bring while keeping the pace and movement in every frame of the shot.",
      image: image3,
      url:'https://youtu.be/stuinbgD2Oc'
    },
    {
      title:'BLUE TICKS SHORT FILM',
      description:"",
      image: image4,
      url:'https://youtu.be/YjAbwMJzMYE'
    },
  ];

  return (
    <div className='films-container'>
      <h2 className='films-title'>Our Films</h2>
      {films.map((film, index) => {
        return (
          <div key={index} className="film-card">
            <img src={film.image} alt="" className='film-image'/>
            <a href={film.url}><button className='button'>Watch Video</button></a>
            <h2>{film.title}</h2>
            <p>{film.description}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Films
