import React from 'react'
import './Reseaux.css'
import yas from '../../assets/Yasmine.png'
import mamoun from '../../assets/mamoun.png'
import tiktok from '../../assets/tiktok.png'
import insta from '../../assets/insta.png'


const Reseaux = () => {
  return (
    <div className='reseaux'>
         <div className="photos">

<div className="photo-box">
  <img src={yas} alt="Docteur Yasmine" />
</div>

<div className="photo-box">
  <img src={mamoun} alt="Docteur Mamoun" />
</div>

</div>
        <div className="icons">
            <h2>SUIVEZ-NOUS</h2>
            <div className="social-icons">
            <a href="https://www.tiktok.com/@dr.yasmine_bennani?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <img src={tiktok }alt="" />
            </a>
            <a href="https://www.instagram.com/dr_yasmine_bennani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="" />
            </a>
        </div>
        </div>
      
    </div>
  )
}

export default Reseaux
