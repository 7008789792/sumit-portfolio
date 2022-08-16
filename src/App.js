import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Exprience from './components/exprience/Exprience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Exprience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

