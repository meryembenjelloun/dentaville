import React from 'react'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import chirurgie from '../assets/chirurgie.png'
import './Chirurgie.css'
import tel from '../assets/telephone-call.png'
import wtsp from '../assets/whatsapp.png'
const Chirurgie = () => {
    return (
        <div>
        <Navbar />
        <div style={{ padding: '30px' }}>
          <Title sub="Chirurgie dentaire " title="Chirurgie dentaire à Rabat : extractions et soins chirurgicaux"/>
          <div className='chirurgie'>
        <div className='chirurgie-left'>
            <img src={chirurgie} alt="" className='imgChirurgie' />
        </div>

        <div className='chirurgie-right'>
        <p>
La chirurgie dentaire regroupe plusieurs interventions permettant de traiter
certaines pathologies bucco-dentaires lorsque les soins classiques ne
suffisent pas. Au sein de notre cabinet dentaire à Rabat, nous réalisons
des actes de chirurgie dentaire dans des conditions de sécurité et de confort
optimales pour le patient.
</p>

<p>
Les interventions les plus fréquentes comprennent l’extraction des dents
abîmées ou infectées, l’extraction des dents de sagesse ainsi que certaines
chirurgies gingivales. Ces procédures sont réalisées avec des techniques
modernes afin de garantir une intervention précise et une récupération rapide.
</p>

<p>
Avant toute intervention, un examen clinique complet et une radiographie
dentaire permettent d’établir un diagnostic précis et de proposer le
traitement le plus adapté. Notre objectif est de préserver la santé
bucco-dentaire du patient tout en assurant un maximum de confort.
</p>

<h3>Quand consulter pour une chirurgie dentaire ?</h3>

<ul>
<li>Extraction de dents de sagesse</li>
<li>Dent trop abîmée ou cassée</li>
<li>Infection ou abcès dentaire</li>
<li>Dents incluses ou mal positionnées</li>
<li>Préparation pour implants dentaires</li>
</ul>

<p>
Notre équipe de dentistes à Rabat vous accompagne avant, pendant et après
l’intervention afin de garantir un traitement efficace et un suivi adapté.
</p>
<div className="rdv-box">

<h3>Prenez rendez-vous sans plus attendre</h3>

<div className="rdv-actions">

<a 
  href="https://wa.me/212651226061" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="rdv-btn whatsapp"
>
  <img src={wtsp} alt="WhatsApp" />
  +212 6512-26061
</a>

<a 
  href="tel:+212537723030" 
  className="rdv-btn phone"
>
  <img src={tel} alt="Téléphone" />
  +212 5377-23030
</a>

</div>

</div>


            
        </div>
        </div>
         
        </div>
        <Footer />
        </div>
      )
}

export default Chirurgie
