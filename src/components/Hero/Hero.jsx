import React from 'react'
import './Hero.css'
import fleche from '../../assets/fleche-droite.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Un sourire, une nouvelle vie</h1>
            <p>Notre cabinet au cœur de Rabat réunit une équipe de dentistes expérimentés, offrant des soins complets et adaptés à chaque patient pour préserver et sublimer votre sourire.</p>
            <Link to='services' smooth={true} offset={-270} duration={500} className='myBtn'>En savoir plus <img src={fleche} alt="" /></Link>
        </div>
      
    </div>
  )
}

export default Hero
