import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <nav>
            <div className='="logo'>
                <Link to="/" >
                    <img src="/logo.png" alt="Denta'Ville" className="logo-img"/>
                </Link>
            </div>

                    
            <ul>
                <li><Link to="/" >Accueil</Link></li>
                <li><Link to="/about">À propos</Link></li>
                <li><Link to="/services">Nos services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
        </nav>
    )

}


export default Header