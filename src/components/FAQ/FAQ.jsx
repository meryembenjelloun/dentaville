import React, { useState } from 'react'
import Questions from '../Questions/Questions'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
     };

    const data = [
    {id:1, 
    question: "Quels sont vos horaires de consultation ?",
    answer: 
      "Nous vous accueillons du lundi au vendredi, de 9h à 18h, sur rendez-vous."},
    { id:2, 
      question: "Proposez-vous des consultations d'urgence ?",
      answer:
       "Oui, les urgences medicales sont prises en charge selon la disponibilité."},
    {id:3, 
        question: "Acceptez-vous les assurances médicales ?",
        answer:
         "Nous travaillons avec plusieurs compagnies d'assurance. Merci de nous contacter."},
    {id:4, 
        question: "Comment prendre rendez-vous ?",
        answer:
         "Vous pouvez prendre rendez-vous par téléphone ou via Whatsapp."},
    {id:5, 
        question: "Où êtes-vous situés ?",
        answer:
         "Notre cabinet est situé au centre ville, facilement accessible."},
    {id:6, 
            question: "Est-ce que les soins dentaires sont douloureux ?",
            answer:
             "La plupart des soins sont réalisés sous anesthésie locale afin d’assurer un maximum de confort. Notre équipe veille à ce que chaque traitement se déroule dans les meilleures conditions."},
    {id:7, 
        question: "Combien coûte une consultation ?",
        answer:
            "Le tarif dépend du type de consultation et du traitement nécessaire. Un devis détaillé vous sera toujours proposé avant tout soin."},
    {id:8, 
        question: "Proposez-vous le blanchiment dentaire ?",
        answer:
            "Oui, nous proposons un blanchiment dentaire professionnel réalisé au cabinet. Ce traitement permet d’éclaircir la teinte des dents en toute sécurité et d’obtenir un sourire plus lumineux.."},
     {id:9, 
        question: "Que faire en cas de douleur dentaire soudaine ?",
        answer:
            "En cas de douleur ou d’urgence dentaire, nous vous recommandons de nous contacter rapidement. Nous ferons notre possible pour vous proposer un rendez-vous dans les meilleurs délais."},
     {id:10, 
        question: "Les enfants peuvent-ils consulter au cabinet ?",
        answer:
            "Oui, nous accueillons les enfants et proposons des soins adaptés à leur âge afin de préserver leur santé bucco-dentaire dès le plus jeune âge."},
                            
    {id:11, 
        question: "Combien de temps dure un traitement dentaire ?",
        answer:
            "La durée dépend du type de soin. Certaines interventions prennent moins de 30 minutes tandis que d’autres nécessitent plusieurs rendez-vous."},
                                    
    {id:12, 
        question: "À quelle fréquence faut-il consulter un dentiste ?",
         answer:
             "Il est recommandé de consulter un dentiste au moins une fois par an pour un contrôle et un détartrage afin de prévenir les problèmes dentaires."},
                                            
    {id:13, 
        question: "Proposez-vous des implants dentaires ?",
         answer:
             "Oui, nous réalisons des traitements implantaires pour remplacer les dents manquantes et restaurer la fonction et l’esthétique du sourire."}
                                                    
                                                                                
                    

    ]
    return (

        <div className="faq">
        
        {data.map((d,index)=> (
        
        <Questions
        key={d.id}
        data={d}
        open={activeIndex === index}
        toggle={() => toggleFAQ(index)}
        />
        
        ))}
        
        </div>
        
        )
        
        }
        
        export default FAQ
