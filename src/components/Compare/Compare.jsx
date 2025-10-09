import React from 'react'
import './Compare.css'
import avant1 from '../../assets/avant.png'
import apres1 from '../../assets/apres.png'
import avant2 from '../../assets/before.png'
import apres2 from '../../assets/after.png'
import avant3 from '../../assets/before2.png'
import apres3 from '../../assets/after2.png'
import avant4 from '../../assets/before3.png'
import apres4 from '../../assets/after3.png'
import ReactCompareImage from 'react-compare-image';




const Compare = () => {
  return (
    <div className="compare">
    <div className="compares">
     
      <div className="compare-image-container">
        <ReactCompareImage leftImage={avant1} rightImage={apres1} />
      </div>
      <div className="compare-description">
        <h3>Prothèse Dentaire</h3>
        <p>
          Le patient a retrouvé confort, esthétique et confiance grâce à une prothèse 
          bien adaptée, légère et stable. Un travail sur mesure pour un résultat 
          naturel et harmonieux.
        </p>
      </div>
    </div>
    <div className="compares">
     
      <div className="compare-image-container">
        <ReactCompareImage leftImage={avant2} rightImage={apres2} />
      </div>
      <div className="compare-description">
        <h3>Transformation esthétique du sourire</h3>
        <p>
         Cette patiente souhaitait harmoniser et illuminer son sourire. Grâce à une approche personnalisée et naturelle, nous avons obtenu un résultat esthétique, subtil et durable.
        </p>
      </div>
    </div>
    <div className="compares">
      
      <div className="compare-image-container">
        <ReactCompareImage leftImage={avant3} rightImage={apres3} />
      </div>
      <div className="compare-description">
        <h3>Prothèse Dentaire</h3>
        <p>
          Le patient a retrouvé confort, esthétique et confiance grâce à une prothèse 
          bien adaptée, légère et stable. Un travail sur mesure pour un résultat 
          naturel et harmonieux.
        </p>
      </div>
    </div>
    <div className="compares">
      
      <div className="compare-image-container">
        <ReactCompareImage leftImage={avant4} rightImage={apres4} />
      </div>
      <div className="compare-description">
        <h3>Un nouveau sourire à tout âge</h3>
        <p>
        Cette patiente rencontrait des difficultés pour manger et sourire normalement. Grâce à une prothèse complète sur mesure, adaptée en haut et en bas, elle a retrouvé confort, stabilité et confiance. Un travail personnalisé pour redonner toute sa dignité à son sourire.
        </p>
      </div>
    </div>
  </div>
  
   
  )
}

export default Compare
