import React from 'react'
import './Hero.css'
import whatsapp from '../../assets/what.png'
import phone from '../../assets/telep.png'

const Hero = () => {
  return (
    <div className='hero container'>

      <div className="hero-text">

        <h1>Un sourire, une nouvelle vie</h1>

        <p>
          Notre cabinet au cœur de Rabat réunit une équipe de dentistes
          expérimentés, offrant des soins complets et adaptés à chaque
          patient pour préserver et sublimer votre sourire.
        </p>

        {/* CONTACT */}

        <div className="hero-contact-container">

          {/* RDV */}

          <div className="hero-section">

            <h3>Prendre un rendez-vous</h3>

            <div className="hero-rdv">

              <a
                href="https://wa.me/212651226061"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn"
              >
                <img src={whatsapp} alt="whatsapp"/>
                +212 65122-6061
              </a>

              <a
                href="tel:+212537723030"
                className="hero-btn"
              >
                <img src={phone} alt="phone"/>
                +212 5377-23030
              </a>

            </div>

          </div>


          {/* URGENCE */}

          <div className="hero-section">

            <h3>Urgence dentaire</h3>

            <a
              href="tel:+212651226061"
              className="hero-btn"
            >
              <img src={phone} alt="urgence"/>
              +212 65122-6061
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero