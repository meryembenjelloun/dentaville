import React from 'react'
import './Contact.css'
import mess from '../../assets/open-email.png'
import tel from '../../assets/telephone-call.png'
import wtsp from '../../assets/whatsapp.png'
import loca from '../../assets/locations.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a21010dc-66ae-4414-9b2d-a19a6eda5e4a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Envoyé!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="textContact">
            <div className="info">
            <h3>Envoyez nous un message <img src={mess} alt="" /></h3>
            <p>Pour toute information supplémentaire, n’hésitez pas à nous contacter en remplissant le formulaire ci-contre. </p> 
            <p> Veuillez noter que la prise de rendez-vous se fait exclusivement par téléphone.</p>
            <div className="infocall">
            <ul>
                <li><img src={wtsp} alt="" />+212 6512-26061</li>
                <li><img src={tel} alt="" />+212 5377-23030</li>
                <li><img src={mess} alt="" />dentaville@gmail.com</li>
                <li><img src={loca} alt="" />1er étage, appt 3, immeuble 12 Av. Allal Ben Abdellah<br/>Rabat 10000, Maroc</li>

            </ul>
            </div>

            </div>
            
            <div className="contact-hours">
                <h3>Nos horaires</h3>
                <p>Lundi - Vendredi : 9h - 18h</p>
                <p>Samedi : 9h - 13h</p>
                <p>Dimanche : Fermé</p>
           </div>
        </div>

        <div className="contactForm">

            <form onSubmit={onSubmit}>
                <label>Prénom</label>
                <input type="text" name='prénom' placeholder='Entrez votre nom' />
                <label>Nom de famille</label>
                <input type="text" name='nf' placeholder='Entrez votre nom de famille' />
                <label>Numéro de téléphone</label>
                <input type="tel" name='tel' placeholder='Entrez votre numéro de téléphone' />
                <label>Adresse Mail</label>
                <input type="email" name='tel' placeholder='Entrez votre email' />
                <label>Message</label>
                <textarea name="message" rows="6" placeholder='Entrez votre message'required></textarea>
                <button type='submit' className='myBtn'>Envoyer</button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
