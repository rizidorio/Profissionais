import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckSquare, FiSearch } from 'react-icons/fi';

import logo from '../../assets/logo_1200.png';
import fundo from '../../assets/fundo_home.png';

import './styles.css';


const Home = () => {
    return (
        <div id="page-home">
            <div id="page-home-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logotipo" />
                    <Link to="/login" className="login">
                        Login
                    </Link>
                    <h2>Seu site de pesquisa de profissionais especializados em manutenções diversas</h2>
                </div>
                <img src={fundo} alt="Imagem background" className="back-img"/>

                <div className="botoes-container">
                    <Link to="/saber-mais">
                        <span>
                            <FiCheckSquare />
                        </span>
                        Sou um profissional
                    </Link>
                    <Link to="/categorias">
                        <span>
                            <FiSearch />
                        </span>
                        Procuro um profissional
                    </Link>
                </div>
            </div> 
        </div>
    );
}

export default Home;