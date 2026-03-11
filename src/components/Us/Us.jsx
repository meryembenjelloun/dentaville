import React from 'react'
import houda from '../../assets/houdaPic.png'
import './Us.css'
const Us = () => {
  return (
    <div className='us'>
        <div className='left-us'>
        <p>
            Notre cabinet dentaire a été conçu pour offrir une expérience de soin moderne,
            rassurante et centrée sur le patient. Chaque consultation se déroule dans un
            environnement confortable, équipé de technologies avancées permettant des
            diagnostics précis et des traitements efficaces.
            </p>

            <p>
            Nous accordons une grande importance à l’écoute et à la compréhension des besoins
            de chaque patient. Avant chaque traitement, nous prenons le temps d’expliquer les
            différentes options afin de vous permettre de faire un choix éclairé et serein.
            </p>

            <p>
            Notre approche repose sur la qualité des soins, la transparence dans les
            traitements et le confort du patient. Grâce à des techniques modernes et
            des protocoles rigoureux d’hygiène et de sécurité, nous garantissons des
            soins fiables et adaptés à chaque situation.
            </p>

            <p>
            Que ce soit pour un simple contrôle, un traitement spécifique ou une amélioration
            esthétique du sourire, notre priorité est de vous accompagner avec
            professionnalisme afin de préserver durablement votre santé bucco-dentaire.
            </p>
         
        </div>

        <div className='right-us'>
            <img src={houda} alt="" className='houdaPic'/>
        </div>
      
    </div>
  )
}

export default Us
