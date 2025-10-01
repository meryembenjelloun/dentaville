import React from 'react'
import './Services.css'
import soins from '../../assets/soins.png'
import esthetique from '../../assets/Esthetique.png'
import protheses from '../../assets/protheses.png'
import implant from '../../assets/implant.png'
import gouttieres from '../../assets/gouttieres.png'
import chirurgie from '../../assets/chirurgie.png'
import enfants from '../../assets/enfants.png'
import icon from '../../assets/dent.png'

const Services = () => {
  return (
    <div className='services'>
        <div className='service'>
            <img src={soins} alt="" />
        <div className="caption">
            <img src={icon} alt="" />
            <h1>Soins dentaires & traitements conservateurs</h1>
            <p>Caries, dévitalisations, urgences, soins de gencives</p>
        </div>
        </div>
        <div className='service'>
            <img src={esthetique} alt="" />
            <div className="caption">
            <img src={icon} alt="" />
            <h1>Esthétique du sourire</h1>
            <p>Blanchiment, facettes, restaurations esthétiques</p>
        </div>
        </div>
        <div className='service'>
            <img src={protheses} alt="" />
            <div className="caption">
            <img src={icon} alt="" />
            <h1>Prothèses & restauration dentaire</h1>
            <p>Couronnes, bridges, prothèses fixes et amovibles</p>
        </div>
        </div>
        <div className='service'>
            <img src={implant} alt="" />
            <div className="caption">
            <img src={icon} alt="" />
            <h1>Implantologie dentaire</h1>
            <p>Remplacement des dents manquantes par implants</p>
        </div>
        </div>
        <div className='service'>
            <img src={gouttieres} alt="" />
            <div className="caption">
            <img src={icon} alt="" />
            <h1>Orthodontie invisible(aligneurs)</h1>
            <p>Correction discrète de l'alignement dentaire</p>
        </div>
        </div>
        <div className='service'>
            <img src={chirurgie} alt="" />
            <div className="caption">
            <img src={icon} alt="" />
            <h1>Chirurgie dentaire</h1>
            <p>Extraction simples et dents de sagesse</p>
        </div>
        </div>
        <div className='service'>
            <img src={enfants} alt="" />
            <div className="caption">
            <img src={icon} alt="" />
            <h1>Pédodontie(soins dentaires pour enfants)</h1>
            <p>Prévention, caries, soins adaptés aux plus jeunes</p>
        </div>
        </div>
        
      
    </div>
  )
}

export default Services
