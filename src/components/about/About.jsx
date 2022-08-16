import React from 'react'
import './About.css'
import me_about from '../../assets/me-about.jpg'
import AboutCards from './AboutCards'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className='about-img'>
            <img src={me_about} alt="" /> 
          </div>
        </div>
        <div className="about-info">
          <AboutCards/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aspernatur quod laudantium dicta aliquam minima eum odio assumenda enim eveniet et provident illum, alias sapiente cum. Necessitatibus quia quam blanditiis!</p>
          <button className='btn btn-primary'>Let's Talk</button>
        </div>
      </div>
    </section>
  )
}

export default About
