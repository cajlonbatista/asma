import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <section className="main">
      <div className="initial">
        <div className="titles">
          <h1>Asma</h1>
        </div>
        <div className="links">
          <Link to="/concept">Conceito</Link>
          <Link to="/features">Características</Link>
          <Link to="/symptoms">Sinais e sintomas</Link>
          <Link to="/treatment">Tratamento</Link>
        </div>
      </div>
    </section>
  );
}

export default Main;
