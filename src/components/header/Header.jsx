import React from 'react'
import CTA from './CTA'
import './Header.css'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
      <div className="container container__header">
        <h5>Hello I'm</h5>
        <h1>Sumit</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
