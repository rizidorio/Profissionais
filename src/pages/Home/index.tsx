import React from 'react';
import { FiLogIn, FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo1.png';
import residencial from '../../assets/residencial.png';
import automotivo from '../../assets/automotivo.png';
import eletronica from '../../assets/eletronica.png';
import jardim from '../../assets/jardim.png';
import mais from '../../assets/mais.png';
import moveis from '../../assets/moveis.png';


const Home = () => {
    return (
        <div id="Home">
                
                <div id="lblPesquisa">
                    <p>Selecione abaixo qual a categoria que gostaria de pesquisar:</p>
                </div>

            <div id="bg">
            <div id="conteudo">
                <div id="info">
                    <h1 className="titulo">
                        Seu site de pesquisa de profissionais especializados em manutenções diversas
                    </h1>

                    <p className="subtitulo">
                        Aqui você encontrará profissionais capacitados em solucinar os mais diversos problemas.
                    </p>

                    <div id="acesso">
                        <p>É um profissional e gostaria de mais informações?</p>

                        <button className="botoes">
                            <span>
                                <FiArrowRightCircle />   
                            </span>
                            <strong>Saiba mais</strong>
                        </button>

                        <p>Já possui cadastro?</p>

                        <button className="botoes">
                            <span>
                                <FiLogIn />
                            </span>
                            <strong>Login</strong>
                        </button>
                    </div>
                </div>
             
                <div id="pesquisa">
                    <div className="colunas">
                        <Link to="/residencial">
                            <button  className="categorias">
                                <img src={residencial} alt="Manutenção Residencial"/>
                                Residencial
                            </button>
                        </Link>
                        <Link to="/automotiva">
                            <button className="categorias">
                                <img src={automotivo} alt="Manutenção Residencial"/>
                                Automotiva
                            </button>
                        </Link>
                        <Link to="/eletrônica">
                            <button className="categorias">
                                <img src={eletronica} alt="Manutenção Residencial"/>
                                Eletrônica
                            </button>
                        </Link>
                    </div>
                    <div className="colunas">
                        <Link to="/jardim">
                            <button className="categorias">
                                <img src={jardim} alt="Manutenção Residencial"/>
                                Jardim
                            </button>
                        </Link>
                        <Link to="/móveis">
                            <button className="categorias">
                                <img src={moveis} alt="Manutenção Residencial"/>
                                Móveis
                            </button>
                        </Link>
                        <Link to="/outras categorias">
                            <button className="categorias">
                                <img src={mais} alt="Manutenção Residencial"/>
                                Outras
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Home;