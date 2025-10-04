import React from 'react'
import './Localisation.css'
import play from '../../assets/playIcon.png'
import loca from '../../assets/Loca.png'
import locavid from '../../assets/localisationDenta.mp4'

const Localisation = () => {
  return (
    <div className='localisation'>
        <div className="locaLeft">
        <video src={locavid}
         controls
         autoPlay muted loop
        >
        </video>
       


        </div>
       
        <div className="locaRight">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.893490729046!2d-6.841083214746482!3d34.0209448039864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d5d1eee7d15%3A0x937e098f86c1694b!2zRGVudGHigJl2aWxsZQ!5e0!3m2!1sfr!2sca!4v1757682190150!5m2!1sfr!2sca"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "15px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
  >
    </iframe>  


        </div>
      
    </div>
    
  )
}

export default Localisation
