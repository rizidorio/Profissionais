import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckSquare, FiSearch } from 'react-icons/fi';

import logo from '../../assets/logo_profissionais.png';
import fundo from '../../assets/img_pesquisar_pessoas.svg';

import './styles.css';


const Home = () => {
    return (
        <main id="page-home">
            <div id="page-home-content" className="container">
                <section className="logo-container">
                    <img src={logo} alt="Logotipo" />
                    <h2>Seu site de pesquisa de profissionais especializados nas mais diversas atividades.</h2>
                </section>
                <img src={fundo} alt="Imagem background" className="back-img"/>
                <section className="botoes-container">
                    <Link to="/saber-mais">
                        <span>
                            <FiCheckSquare />
                        </span>
                        Sou um profissional
                    </Link>
                    <Link to="/pesquisa">
                        <span>
                            <FiSearch />
                        </span>
                        Procuro um profissional
                    </Link>
                </section>
                <section className="login">
                    Já possui cadastro? Faça seu
                    <Link to="/login" >
                        Login
                    </Link>
                </section>
            </div> 
            
        </main>
    );
}

export default Home;