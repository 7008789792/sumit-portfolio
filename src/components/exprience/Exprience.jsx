import React from 'react'
import './Exprience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Exprience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp-container">
        <div className="exp-frontend">
          <h3>Frontend Developement</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>  
        <div className="exp-backend">
          <h3>Backend Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Intermideate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermideate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-icon"/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exprience
