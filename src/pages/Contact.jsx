import React from 'react';
import './Contact.css';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>
      <div className="contact-content">
      <form className="contact-form">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="tel" placeholder="Téléphone" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Votre message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <div className="social">
        <h2>Suivez-nous</h2>
        <div className="social-icons">
        <a href="https://www.instagram.com/dr_yasmine_bennani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
           <FaInstagram size={40} color="#30BFBF" /> {/* doré */}
            </a>
            <a href="https://www.tiktok.com/@dr.yasmine_bennani?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer">
            <FaTiktok size={40} color="#30BFBF" /> {/* turquoise */}
            </a>
        </div>
        
        </div>
      </div>
    </div>
    

   
  );
}

export default Contact;
