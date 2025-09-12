import React from 'react';
import './Footer.css'; // on créera ce fichier juste après
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
            <h3>Contact: </h3>
            <p>Email: <a href="mailto:contact@dentaville.com">contact@dentaville.com</a></p>
            <p>Téléphone (WhatsApp): <a href="tel: +212 6512-26061">+212 6512-26061</a></p>
            <p>Téléphone fixe: <a href="tel:+212 5377-23030">+212 5377-23030</a></p>
            <p>Adresse: 1er étage, appartement 3, immeuble 12 Av. Allal Ben Abdellah, Rabat 10000, Maroc</p>
        </div>
        <div className="footer-links">
            <h3>Liens rapides:</h3>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">À propos</a></li>
                <li><a href="/services">Nos services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className="footer-social">
            <h3>Suivez-nous</h3>
            <div className="social-icons">
            <a href="https://www.instagram.com/dr_yasmine_bennani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
           <FaInstagram size={30} color="#30BFBF" />
            </a>
            <a href="https://www.tiktok.com/@dr.yasmine_bennani?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer">
            <FaTiktok size={30} color="#30BFBF" />
            </a>
        </div>
        <div className="footer-map">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.893490729046!2d-6.841083214746482!3d34.0209448039864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d5d1eee7d15%3A0x937e098f86c1694b!2zRGVudGHigJl2aWxsZQ!5e0!3m2!1sfr!2sca!4v1757682190150!5m2!1sfr!2sca"
  width="300"
  height="200"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Localisation DentaVille"
/>

</div>

      </div>
      </div>
      <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} DentaVille. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
