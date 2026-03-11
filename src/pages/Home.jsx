import React, { useState } from 'react'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Title from '../components/Title/Title'
import About from '../components/About/About'
import Localisation from '../components/Localisation/Localisation'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Reseaux from '../components/Reseaux/Reseaux'
import Galerie from '../components/Galerie/Galerie'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import Avis from '../components/Avis/Avis'
import FAQ from '../components/FAQ/FAQ'
import Compare from '../components/Compare/Compare'
import Us from '../components/Us/Us'

const Home = () => {

    const [state, setState] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""))
      if (element) {
  
        const yOffset = -120
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  
        window.scrollTo({
          top: y,
          behavior: "smooth"
        })
      }
    }

  }, [location])
  return (
    <div>

      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <div className='container'>

        <section id="services">
          <Title sub="Nos services" title="Ce que nous offrons" />
          <Services />
        </section>

        <section id="about">
          <About setState={setState} />
        </section>

        <section id="us">
          <Title sub="Pourquoi choisir notre cabinet?" title="Une dentisterie centrée sur votre bien-être"/>
          <Us/>
        </section>

        <section id="compare">
          <Title sub='Cas cliniques' title="Avant/Après" />
          <Compare />
        </section>

        <section id="localisation">
          <Title sub='Localisation' title='Où sommes nous?' />
          <Localisation />
        </section>

        <section id="galerie">
          <Title sub='Galerie' title='' />
          <Galerie />
        </section>

        <section id="avis">
          <Title sub='Avis' title='Ils nous ont fait confiance' />
          <Avis />
        </section>

        <section id="faq">
          <Title sub='FAQ' title='Questions fréquemment posées'/>
          <FAQ/>
        </section>

        <section id="contact">
          <Title sub='Contact' title="Besoin de plus d'informations?" />
          <Contact />
        </section>

        <Reseaux />
        <Footer />

      </div>

      <VideoPlayer state={state} setState={setState} />

    </div>
  )
}

export default Home