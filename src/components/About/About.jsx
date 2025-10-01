import React from 'react'
import './About.css'
import aboutImage from '../../assets/About.png'
import playImage from '../../assets/playIcon.png'


const About = () => {
    
  return (
    <div className='about'>
        <div className="leftAbout">
            <img src={aboutImage}alt="" className='imgAbout'/>
            <img src={playImage}alt="" className='playIcon' />
        
        </div>

        <div className="rightAbout">
            <h3>À PROPOS DE NOTRE CABINET</h3>
            <h2>Qui sommes nous?</h2>
            <p>
    Notre cabinet dentaire met à votre disposition un environnement moderne et confortable, 
    équipé des technologies les plus avancées pour garantir des soins précis et sûrs. 
    Chaque détail a été pensé pour allier innovation, hygiène et confort.
  </p>
            <p>Notre équipe est composée de :</p>
            <ul>
             <li>Dr Asmae El Ayoubi El Idrissi</li>
             <li>Dr Yasmine Bennani</li>
             <li>Dr Mamoune Bennani</li>
           </ul>
            <p>Trois chirurgiens-dentistes dynamiques et complémentaires, réunissant leurs compétences 
               pour couvrir l’ensemble des spécialités dentaires. Leur objectif commun : 
               préserver votre santé bucco-dentaire et redonner à votre sourire tout son éclat.</p>
               <p>
             Grâce à une approche centrée sur le patient, nous favorisons une relation de confiance, 
             des explications claires et des soins personnalisés, aussi bien pour les adultes que pour les enfants.
             </p>

       </div>      
      
    </div>
  )
}

export default About
