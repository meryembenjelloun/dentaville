import React from 'react'
import './Compare.css'
import avant1 from '../../assets/avant.png'
import apres1 from '../../assets/apres.png'
import avant2 from '../../assets/before.png'
import apres2 from '../../assets/after.png'
import avant6 from '../../assets/avant6.png'
import apres6 from '../../assets/apres6.png'
import avant4 from '../../assets/before3.png'
import avant5 from '../../assets/avant5.png'
import apres4 from '../../assets/after3.png'
import apres5 from '../../assets/apres5.png'
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
        <ReactCompareImage leftImage={avant6} rightImage={apres6} />
      </div>
      <div className="compare-description">
        <h3>Bridge Dentaire</h3>
        <p>
        Cette patiente présentait des dents manquantes qui affectaient à la fois l’esthétique de son sourire et sa capacité à mastiquer correctement. Grâce à la réalisation d’un bridge dentaire sur mesure, elle a retrouvé un sourire complet, stable et naturel. Ce traitement permet de remplacer les dents absentes tout en restaurant confort, fonction et confiance au quotidien.
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
    <div className="compares">
      
      <div className="compare-image-container">
        <ReactCompareImage leftImage={avant5} rightImage={apres5} />
      </div>
      <div className="compare-description">
        <h3>Un sourire plus blanc et plus éclatant</h3>
        <p>
        Un sourire lumineux peut transformer la confiance en soi. Grâce à un blanchiment dentaire professionnel réalisé au cabinet, il est possible d’éclaircir la teinte des dents en toute sécurité. Ce traitement permet d’éliminer les taches liées au café, au thé, au tabac ou simplement au temps. En quelques séances, les dents retrouvent leur éclat naturel pour un sourire plus harmonieux et plus esthétique.
        </p>
      </div>
    </div>
    
  </div>
  
   
  )
}

export default Compare
