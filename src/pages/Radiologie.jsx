import React from 'react'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import radiologie from '../assets/8.png'
import './Radiologie.css'
import tel from '../assets/telep.png'
import wtsp from '../assets/what.png'

const Radiologie = () => {
    return (
        <div>
        <Navbar />

        <div style={{ padding: '30px' }}>

          <Title 
          sub="Radiologie panoramique dentaire"
          title="Radiologie dentaire à Rabat : diagnostic précis grâce à l’imagerie"
          />

          <div className='radiologie'>

        <div className='radiologie-left'>
            <img src={radiologie} alt="" className='imgRadio' />
        </div>

        <div className='radiologie-right'>

<p>
La radiologie dentaire est un examen essentiel permettant d’obtenir
une image précise des dents, des racines et des structures osseuses
de la mâchoire. Elle permet au dentiste d’établir un diagnostic
fiable et de détecter des problèmes invisibles à l’œil nu.
</p>

<p>
La radiographie panoramique offre une vue complète de l’ensemble
des dents et des mâchoires. Elle est souvent utilisée pour
diagnostiquer les caries profondes, les infections dentaires,
les dents incluses ou encore préparer certains traitements
comme les implants dentaires ou les extractions de dents
de sagesse.
</p>

<p>
Dans notre cabinet dentaire à Rabat, nous utilisons des
équipements modernes permettant de réaliser des radiographies
rapides et précises tout en limitant l’exposition aux rayons.
</p>

<h3>Quand réaliser une radiographie dentaire ?</h3>

<ul>
<li>Douleur dentaire inexpliquée</li>
<li>Détection de caries profondes</li>
<li>Diagnostic d’infection ou d’abcès</li>
<li>Préparation d’un implant dentaire</li>
<li>Extraction de dents de sagesse</li>
</ul>

<p>
La radiologie permet d’identifier rapidement l’origine d’un
problème dentaire et de planifier le traitement le plus
adapté afin de préserver la santé bucco-dentaire.
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

export default Radiologie