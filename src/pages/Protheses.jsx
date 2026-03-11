import React from 'react'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import prothese from '../assets/protheses.png'
import './Protheses.css'
import tel from '../assets/telephone-call.png'
import wtsp from '../assets/whatsapp.png'

const Protheses = () => {
    return (
        <div>
        <Navbar />

        <div style={{ padding: '30px' }}>
          <Title 
          sub="Prothèses & restauration dentaire"
          title="Prothèses dentaires et bridge : remplacer les dents abîmées ou manquantes"
          />

          <div className='protheses'>

        <div className='prothese-left'>
            <img src={prothese} alt="" className='imgProthese' />
        </div>

        <div className='soin-prothese'>

<p>
Les prothèses dentaires permettent de restaurer les dents abîmées ou
de remplacer les dents manquantes afin de retrouver un sourire
harmonieux et une mastication confortable.
</p>

<p>
Selon les besoins du patient, plusieurs solutions peuvent être
proposées : couronnes dentaires, bridges dentaires, prothèses fixes
ou amovibles. Chaque prothèse est conçue sur mesure afin d’assurer
un résultat esthétique et parfaitement fonctionnel.
</p>

<p>
Dans notre cabinet dentaire à Rabat, nous utilisons des matériaux
modernes et durables afin de garantir une restauration dentaire
solide, confortable et naturelle.
</p>

<h3>Quand envisager une prothèse dentaire ?</h3>

<ul>
<li>Dent cassée ou très abîmée</li>
<li>Dent manquante</li>
<li>Difficulté à mastiquer</li>
<li>Remplacement d’anciennes prothèses</li>
<li>Amélioration de l’esthétique du sourire</li>
</ul>

<p>
Nos dentistes à Rabat réalisent un diagnostic complet afin de proposer
la solution prothétique la plus adaptée pour restaurer votre sourire
et améliorer votre confort au quotidien.
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

export default Protheses