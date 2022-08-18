import React from 'react'
import './Portfolio.css'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.jpg'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: portfolio1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 2,
    image: portfolio2,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 3,
    image: portfolio3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 4,
    image: portfolio4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 5,
    image: portfolio5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 6,
    image: portfolio6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/Alien_pixels'
  }
]

const Portfolio = () => {
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container-portfolio">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <div key={id} className='portfolio-cards'>
          <div className='image'>
            <img src={image} alt="" />
          </div>
          <p>{title}</p>
          <div className="p-btn">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
