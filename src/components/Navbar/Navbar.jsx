import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'
import menu from'../../assets/menuBar.png'
import croix from '../../assets/cross.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky,setSticky] = useState(false);
    

    useEffect(()=>{
        window.addEventListener('scroll',()=>{scrollY>50 ? setSticky(true) : setSticky(false); 
    })
},[]);
    const [mobileMenu,setMenu] = useState(false);

    const changeMenu =()=>{
        mobileMenu? setMenu(false) : setMenu(true);

    }

  return (
   

    <nav className={`${sticky? 'dark-nav' : ''}`}>
     <Link to="hero" smooth={true} offset={-270} duration={500}>
    <img src={logo} alt="Dentaville" className="logo" />
  </Link>
      <ul className={mobileMenu? '' : 'hideMenu'}>
        <li><Link to='hero' smooth={true} offset={-270} duration={500} onClick={() => setMenu(false)}>Accueil</Link></li>
        <li><Link to='services' smooth={true} offset={-270} duration={500} onClick={() => setMenu(false)}>Nos services</Link></li>
        <li><Link to='about' smooth={true} offset={-270} duration={500} onClick={() => setMenu(false)}>À propos de nous</Link></li>
        <li><Link  to='localisation' smooth={true} offset={-270} duration={500} onClick={() => setMenu(false)}>Localisation</Link></li>
        <li><Link  to='contact' smooth={true} offset={-270} duration={500} onClick={() => setMenu(false)}>Prise de rendez-vous</Link></li>
        <li><Link  to='contact' smooth={true} offset={-270} duration={500} onClick={() => setMenu(false)} className='myBtn'>Contact</Link></li>
      </ul>
      <img src={mobileMenu? croix : menu} alt="" className='menu' onClick={changeMenu} />
    </nav>
  )
}

export default Navbar
