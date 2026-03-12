import React from 'react'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import gouttiere from '../assets/gouttieres.png'
import './Orthodontie.css'
import tel from '../assets/telep.png'
import wtsp from '../assets/what.png'

const Orthodontie = () => {
    return (
        <div>
        <Navbar />

        <div style={{ padding: '30px' }}>
          <Title 
          sub="Orthodontie invisible (aligneurs)" 
          title="Orthodontie invisible à Rabat : aligner les dents discrètement"
          />

          <div className='orthodontie'>

        <div className='ortho-left'>
            <img src={gouttiere} alt="" className='imgOrtho' />
        </div>

        <div className='ortho-right'>

<p>
L’orthodontie invisible permet de corriger l’alignement des dents
de manière discrète grâce à des aligneurs transparents.
Contrairement aux appareils dentaires traditionnels, ces gouttières
sont presque invisibles et peuvent être retirées facilement pour
manger ou se brosser les dents.
</p>

<p>
Les aligneurs sont conçus sur mesure afin de déplacer progressivement
les dents vers leur position idéale. Ce traitement est particulièrement
apprécié par les adultes et les adolescents souhaitant améliorer leur
sourire sans appareil métallique visible.
</p>

<p>
Au sein de notre cabinet dentaire à Rabat, nous réalisons un bilan
complet afin d’évaluer l’alignement des dents et de proposer un
traitement orthodontique personnalisé pour un résultat esthétique
et durable.
</p>

<h3>Quand envisager une orthodontie invisible ?</h3>

<ul>
<li>Dents mal alignées</li>
<li>Chevauchement des dents</li>
<li>Espaces entre les dents</li>
<li>Mauvaise occlusion dentaire</li>
<li>Amélioration esthétique du sourire</li>
</ul>

<p>
Grâce aux aligneurs transparents, il est possible d’améliorer
l’alignement des dents de manière confortable et discrète,
tout en conservant un sourire naturel pendant le traitement.
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

export default Orthodontie