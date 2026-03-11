import React, { useRef } from 'react'
import back from '../../assets/back.png'
import next from '../../assets/next.png'
import user from '../../assets/utilisateur.png'
import './Avis.css'

const reviews = [
{
name:"Hiba Hibaaa",
text:"Je suis très satisfaite de mon expérience dans Denta’ville. L’équipe est professionnelle, accueillante et très à l’écoute. Le dentiste a pris le temps de bien m’expliquer le traitement."
},
{
name:"Amal Elfarissi",
text:"Très bonne prise en charge au sein de ce centre dentaire. J’ai bénéficié d’un traitement avec le docteur Mamoune, très professionnel et à l’écoute."
},
{
name:"Salma Boudmagh Lalaoui",
text:"Soins impeccables, hygiène parfaite et accueil très professionnel. Une très bonne expérience, je recommande sans hésiter."
},
{
name:"Ghita Hajjam",
text:"Je suis très satisfaite des soins et surtout de l’écoute et de la compréhension de l’équipe. Je recommande."
},
{
name:"Ahmed Bouhllab",
text:"Quel plaisir de se faire soigner par une jeunesse compétente et motivée."
},
{
name:"Anas Abdeddaim",
text:"Très bonne expérience, toute l’équipe est accueillante. Dr Yassmine est une excellente dentiste, douce et professionnelle."
},
{
name:"Imane Sakka",
text:"Excellente clinique dentaire, équipe très professionnelle et accueil chaleureux. Je recommande vivement."
},
{
name:"Zina Ibnattya",
text:"Meilleur cabinet en ville!! Bel accueil, cabinet propre et rénové, les dentistes sont professionnels et optisoins, je recommande!"
},
{
name:"Ali Nasrollah",
text:"Superbe prise en charge, des dentistes très compétents avec des prix très raisonnables."
},
{
name:"Magic Sac et Boite",
text:"Je recommande vivement ce cabinet dentaire sur Rabat centre."
},
{
name:"Nassima Hanafi",
text:"Best dentist in town, je recommande vivement!!!"
},
{
name:"Nada Ibrahimi",
text:"Meilleur cabinet dentaire sur Rabat, meilleur service, propreté parfaite."
}
]

const Avis = () => {

const slider = useRef()

const slideForward = () => {

const sliderWidth = slider.current.scrollWidth
const visibleWidth = slider.current.clientWidth
const scrollPosition = slider.current.scrollLeft

if (scrollPosition + visibleWidth >= sliderWidth){
slider.current.scrollTo({
left:0,
behavior:"smooth"
})
}
else{
slider.current.scrollBy({
left:350,
behavior:"smooth"
})
}

}

const slideBackward = () => {

const scrollPosition = slider.current.scrollLeft

if(scrollPosition <= 0){
slider.current.scrollTo({
left:slider.current.scrollWidth,
behavior:"smooth"
})
}
else{
slider.current.scrollBy({
left:-350,
behavior:"smooth"
})
}

}

return(

<div className="avis">

<img src={next} className="next-btn" onClick={slideForward}/>
<img src={back} className="back-btn" onClick={slideBackward}/>

<div className="slider" ref={slider}>

{reviews.map((review,index)=>(
<div className="slide" key={index}>

<div className="user-info">
<img src={user}/>
<h3>{review.name}</h3>
</div>

<p>{review.text}</p>

</div>
))}

</div>

</div>

)

}

export default Avis