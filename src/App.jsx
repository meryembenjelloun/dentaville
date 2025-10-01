import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Localisation from './components/Localisation/Localisation'
import GoogleReviewsWidget from 'google-reviews-widget'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Reseaux from './components/Reseaux/Reseaux'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title sub="Nos services" title="Ce que nous offrons"/>
      <Services/>
      <About/> 
      <Title sub='Localisation' title='Où sommes nous?'/>
      <Localisation/>
      <Title sub='Avis' title='Ils nous ont fait confiance'/>
      <GoogleReviewsWidget instanceId='4hQZQS5FmjYM4qIVLsdu'/>
      <Title sub='Contact' title="Besoin de plus d'informations?"/>
      <Contact/>
      <Reseaux/>
      <Footer/>


      
     

      </div>
      

    </div>
  )
}

export default App

