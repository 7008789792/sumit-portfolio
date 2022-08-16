import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './About.css'

const AboutCards = () => {
  return (
    <div className='about-cards'>
      <div className="card">
          <div><FaAward/></div>
          <h5>Experience</h5>
          <small>+3 Years Working</small>
      </div>
      <div className="card">
          <div><FiUsers/></div>
          <h5>Clients</h5>
          <small>300+ Worldwide</small>
      </div>
      <div className="card">
          <div><VscFolderLibrary/></div>
          <h5>Projects</h5>
          <small>50+ Completed</small>
      </div>
    </div>
  )
}

export default AboutCards
