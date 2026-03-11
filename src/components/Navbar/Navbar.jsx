import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menuBar.png'
import croix from '../../assets/cross.png'
import { Link } from "react-router-dom"

const Navbar = () => {

    const [sticky,setSticky] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    },[])

    const [mobileMenu,setMenu] = useState(false)

    const changeMenu = ()=>{
        setMenu(!mobileMenu)
    }

  return (

    <nav className={`${sticky ? 'dark-nav' : ''}`}>

      <Link to="/#hero">
        <img src={logo} alt="Dentaville" className="logo"/>
      </Link>

      <ul className={mobileMenu ? '' : 'hideMenu'}>

        <li>
          <Link to="/#hero" onClick={() => setMenu(false)}>
            Accueil
          </Link>
        </li>

        <li>
          <Link to="/#services" onClick={() => setMenu(false)}>
            Nos services
          </Link>
        </li>

        <li>
          <Link to="/#about" onClick={() => setMenu(false)}>
            À propos de nous
          </Link>
        </li>

        <li>
          <Link to="/#compare" onClick={() => setMenu(false)}>
            Cas cliniques
          </Link>
        </li>

        <li>
          <Link to="/#localisation" onClick={() => setMenu(false)}>
            Localisation
          </Link>
        </li>

        <li>
          <Link to="/#contact" className="myBtn" onClick={() => setMenu(false)}>
            Contact
          </Link>
        </li>

      </ul>

      <img
        src={mobileMenu ? croix : menu}
        alt=""
        className="menu"
        onClick={changeMenu}
      />

    </nav>
  )
}

export default Navbar