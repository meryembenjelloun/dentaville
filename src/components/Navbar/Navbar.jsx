import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'
import menu from'../../assets/app.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky,setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{scrollY>50 ? setSticky(true) : setSticky(false); 
    })
},[]);
  return (
   

    <nav className={`${sticky? 'dark-nav' : ''}`}>
     <Link to="hero" smooth={true} offset={-270} duration={500}>
    <img src={logo} alt="Dentaville" className="logo" />
  </Link>
      <ul>
        <li><Link to='hero' smooth={true} offset={-270} duration={500}>Accueil</Link></li>
        <li><Link to='services' smooth={true} offset={-270} duration={500}>Nos services</Link></li>
        <li><Link to='about' smooth={true} offset={-270} duration={500}>À propos de nous</Link></li>
        <li><Link  to='contact' smooth={true} offset={-270} duration={500} className='myBtn'>Contact</Link></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
