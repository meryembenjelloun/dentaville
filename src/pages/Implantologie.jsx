import React from 'react'
import './Implantologie.css'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import implant from "../assets/implant.png"
import tel from '../assets/telep.png'
import wtsp from '../assets/what.png'

const Implantologie = () => {
    return (
        <div>
        <Navbar />

        <div style={{ padding: '30px' }}>
          <Title 
          sub="Implantologie dentaire"
          title="Implant dentaire : remplacer durablement une dent manquante"
          />

        <div className='implanto'>

        <div className='implanto-left'>
            <img src={implant} alt="" className='imgImplant' />
        </div>


        <div className='implanto-right'>

<p>
L’implantologie dentaire est une solution moderne et durable permettant
de remplacer une dent manquante. Un implant dentaire est une petite
vis en titane placée dans l’os de la mâchoire afin de remplacer la
racine de la dent absente.
</p>

<p>
Une fois l’implant intégré dans l’os, une couronne dentaire est
fixée dessus afin de retrouver une dent esthétique et parfaitement
fonctionnelle. Cette technique permet de restaurer le sourire tout
en préservant les dents voisines.
</p>

<p>
Au sein de notre cabinet dentaire à Rabat, nous utilisons des
techniques modernes d’implantologie afin de garantir un traitement
précis, confortable et durable pour chaque patient.
</p>

<h3>Quand envisager un implant dentaire ?</h3>

<ul>
<li>Dent manquante</li>
<li>Plusieurs dents absentes</li>
<li>Difficulté à mastiquer</li>
<li>Remplacement d’un bridge ou d’une prothèse</li>
<li>Amélioration de l’esthétique du sourire</li>
</ul>

<p>
Avant toute pose d’implant, un examen clinique et une radiographie
permettent d’évaluer la qualité de l’os et de planifier le traitement
le plus adapté. Notre équipe vous accompagne tout au long du
traitement afin d’assurer un résultat naturel et durable.
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

export default Implantologie