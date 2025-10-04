import React from 'react'
import './Reseaux.css'
import yas from '../../assets/Yasmine.png'
import tiktok from '../../assets/tiktok.png'
import insta from '../../assets/insta.png'


const Reseaux = () => {
  return (
    <div className='reseaux'>
        <div className="yasmine-pic">
            <img src={yas} alt="" />
        </div>
        <div className="icons">
            <h2>SUIVEZ-NOUS</h2>
            <a href="https://www.tiktok.com/@dr.yasmine_bennani?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <img src={tiktok }alt="" />
            </a>
            <a href="https://www.instagram.com/dr_yasmine_bennani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="" />
            </a>
        </div>
      
    </div>
  )
}

export default Reseaux
