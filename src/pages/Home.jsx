import React from 'react';
import './Home.css'
import comptoir from '../assets/comptoir.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenue au cabinet DentaVille</h1>
      <p>Votre sourire, notre priorité</p>
      <img className="comptoir-image" src={comptoir} alt="Comptoir du cabinet" />
    </div>
  );
}

export default Home;
