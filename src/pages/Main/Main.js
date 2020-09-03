import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";

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
        <div className="contact">
          <a href="https://www.instagram.com/cajlonbatista/" target="_blank"><img src={instagram} alt="" /></a>
          <a href="https://github.com/cajlonbatista" target="_blank"><img src={github} alt="" /></a>
          <a href="https://www.facebook.com/franciscocajlon.jhonanthanmourabatista/" target="_blank"><img src={facebook} alt="" /></a>
        </div>
    </section>
  );
}

export default Main;
