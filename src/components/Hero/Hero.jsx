import React from 'react'
import './Hero.css'
import fleche from '../../assets/fleche-droite.png'
import { Link } from 'react-scroll'
import whatsapp from '../../assets/whatsapp.png'
import phone from '../../assets/telephone-call.png'


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

        <Link
          to='services'
          smooth={true}
          offset={-270}
          duration={500}
          className='myBtn'
        >
          En savoir plus <img src={fleche} alt="" />
        </Link>


        {/* SECTION CONTACT */}

        <div className="hero-contact-container">

          {/* PRENDRE RDV */}

          <div className="hero-section">

            <h3>Prendre un rendez-vous</h3>

            <div className="hero-rdv">

              <a
                href="https://wa.me/212651260661"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-rdv-btn"
              >

                <img src={whatsapp} alt="whatsapp"/>

                <div>
                  <p className="hero-contact-title">Écrivez-nous</p>
                  <p className="hero-contact-number">+212 6512-26061</p>
                </div>

              </a>


              <a
                href="tel:+212537723030"
                className="hero-rdv-btn"
              >

                <img src={phone} alt="phone"/>

                <div>
                  <p className="hero-contact-title">Appelez-nous</p>
                  <p className="hero-contact-number">+212 5377-23030</p>
                </div>

              </a>

            </div>

          </div>


          {/* URGENCE */}

          <div className="hero-section urgence-box">

            <h3>Urgence dentaire</h3>

            <a
              href="tel:+212651226061"
              className="hero-urgence-btn"
            >

              <img src={phone} alt="urgence"/>

              <div>
                <p className="hero-contact-title">Appeler maintenant</p>
                <p className="hero-contact-number">+212 6512-26061</p>
              </div>

            </a>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Hero