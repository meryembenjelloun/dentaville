import React from 'react'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import esthetique from '../assets/esthetique.png'
import './Esthetique.css'
import tel from '../assets/telephone-call.png'
import wtsp from '../assets/whatsapp.png'

const Esthetique = () => {
    return (
        <div>
        <Navbar />

        <div style={{ padding: '30px' }}>

          <Title 
          sub="Esthétique du sourire"
          title="Esthétique dentaire : retrouver un sourire harmonieux"
          />

          <div className='esthetique'>

        <div className='esthetique-left'>
            <img src={esthetique} alt="" className='imgEsthetique' />
        </div>


        <div className='esthetique-right'>

<p>
L’esthétique dentaire regroupe l’ensemble des traitements permettant
d’améliorer l’apparence du sourire tout en préservant la santé des dents.
Un sourire harmonieux contribue à la confiance en soi et au bien-être
au quotidien.
</p>

<p>
Dans notre cabinet dentaire à Rabat, nous proposons plusieurs solutions
modernes pour corriger les imperfections du sourire : blanchiment
dentaire, facettes dentaires, correction de la forme ou de la couleur
des dents ainsi que l’amélioration de l’alignement.
</p>

<p>
Chaque traitement esthétique est personnalisé en fonction des besoins
du patient afin d’obtenir un résultat naturel, équilibré et durable.
Notre objectif est de sublimer votre sourire tout en respectant
l’harmonie globale du visage.
</p>

<h3>Quand envisager un traitement esthétique dentaire ?</h3>

<ul>
<li>Dents jaunies ou tachées</li>
<li>Dents cassées ou abîmées</li>
<li>Dents mal alignées ou irrégulières</li>
<li>Espaces entre les dents</li>
<li>Sourire peu harmonieux</li>
</ul>

<p>
Nos dentistes à Rabat vous accompagnent pour analyser votre sourire
et vous proposer les solutions esthétiques les plus adaptées afin
d’obtenir un résultat naturel et durable.
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
<img src={wtsp} alt="WhatsApp"/>
+212 6512-26061
</a>

<a 
href="tel:+212537723030"
className="rdv-btn phone"
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

export default Esthetique