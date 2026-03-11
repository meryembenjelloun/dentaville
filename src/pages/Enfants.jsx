import React from 'react'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import enfant from '../assets/enfants.png'
import './Enfants.css'
import tel from '../assets/telephone-call.png'
import wtsp from '../assets/whatsapp.png'

const Enfants = () => {
    return (
        <div>
        <Navbar />
        <div style={{ padding: '30px' }}>
          <Title 
            sub="Pédodontie (dentiste pour enfants)" 
            title="Dentiste pour enfants à Rabat : soins dentaires adaptés aux plus jeunes"
          />

          <div className='enfants'>

        <div className='enfant-left'>
            <img src={enfant} alt="" className='imgEnfant' />
        </div>

        <div className='enfant-right'>

<p>
La pédodontie est la spécialité dentaire dédiée aux soins des enfants. Elle vise à
prévenir et traiter les problèmes dentaires dès le plus jeune âge afin de garantir
une bonne santé bucco-dentaire et un développement harmonieux des dents.
</p>

<p>
Au sein de notre cabinet dentaire à Rabat, nous accueillons les enfants dans un
environnement rassurant et adapté afin de rendre la visite chez le dentiste
agréable et sans stress. Notre objectif est d’instaurer une relation de confiance
avec l’enfant et de lui apprendre les bons gestes d’hygiène dentaire.
</p>

<p>
Les soins dentaires pour enfants comprennent la prévention des caries,
le traitement des dents de lait, les soins conservateurs ainsi que le suivi
de la croissance des dents et des mâchoires.
</p>

<h3>Quand consulter un dentiste pour enfant ?</h3>

<ul>
<li>Première visite chez le dentiste</li>
<li>Douleur ou carie sur une dent de lait</li>
<li>Dent cassée ou traumatisme dentaire</li>
<li>Suivi de la croissance des dents</li>
<li>Prévention des caries et conseils d’hygiène</li>
</ul>

<p>
Notre équipe de dentistes à Rabat accompagne les enfants et leurs parents
afin d’assurer des soins adaptés, une prévention efficace et un suivi
régulier pour préserver la santé bucco-dentaire des plus jeunes.
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

export default Enfants