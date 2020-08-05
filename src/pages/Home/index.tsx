import React from 'react';

import logo from '../../assets/logo1.png';
import fundo from '../../assets/fundo1.png';

import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="page-home">
            <div id="page-home-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logotipo" />
                    <h2>Seu site de pesquisa de profissionais especializados em manutenções diversas.</h2>
                </div>
                <img src={fundo} alt="fundo" className="back-img"/>

                <div className="botoes-container">
                    <Link to="/saber-mais">
                        Sou um profissional e quero saber mais.
                    </Link>
                    <Link to="/categorias">
                        Quero encontrar um profissional.
                    </Link>
                </div>
            </div> 
        </div>
    );
}

export default Home;