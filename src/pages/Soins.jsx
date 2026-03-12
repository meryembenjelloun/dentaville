import React from 'react'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import soins from '../assets/soins.png'
import './Soins.css'
import tel from '../assets/telep.png'
import wtsp from '../assets/what.png'

const Soins = () => {
  return (
    <div>
    <Navbar />

    <div style={{ padding: '30px' }}>

      <Title 
      sub="Soins dentaires & traitements conservateurs"
      title="Soins dentaires à Rabat : préserver la santé de vos dents"
      />

      <div className='soins'>

        <div className='soin-left'>
            <img src={soins} alt="" className='imgSoin' />
        </div>

        <div className='soin-right'>

<p>
Les soins dentaires conservateurs ont pour objectif de traiter les
problèmes dentaires tout en préservant les dents naturelles.
Ils permettent de maintenir une bonne santé bucco-dentaire et
d’éviter des traitements plus complexes à long terme.
</p>

<p>
Dans notre cabinet dentaire à Rabat, nous prenons en charge
le traitement des caries, les dévitalisations (traitements de canal),
les infections dentaires ainsi que les maladies des gencives.
Chaque soin est réalisé avec des techniques modernes afin
de garantir confort et efficacité.
</p>

<p>
Un suivi régulier chez votre dentiste permet de détecter
rapidement les problèmes dentaires et d’éviter leur
aggravation. Notre équipe vous accompagne pour préserver
la santé de vos dents et maintenir un sourire sain.
</p>

<h3>Quand consulter pour des soins dentaires ?</h3>

<ul>
<li>Douleur dentaire</li>
<li>Caries dentaires</li>
<li>Saignement des gencives</li>
<li>Dent cassée ou abîmée</li>
<li>Contrôle dentaire et détartrage</li>
</ul>

<p>
Nos dentistes à Rabat réalisent un diagnostic précis afin de
proposer les soins les plus adaptés pour préserver votre
santé bucco-dentaire et maintenir un sourire durable.
</p>


<div className="rdv-box">

<h3>Prenez rendez-vous sans plus attendre</h3>

<div className="rdv-actions">

<a 
href="https://wa.me/212651226061"
target="_blank"
rel="noopener noreferrer"
className="hero-btn"
>
<img src={wtsp} alt="WhatsApp"/>
+212 6512-26061
</a>

<a 
href="tel:+212537723030"
className="hero-btn"
>
<img src={tel} alt="Téléphone"/>
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

export default Soins