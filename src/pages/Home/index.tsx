import React from 'react';
import { FiLogIn, FiArrowRightCircle } from 'react-icons/fi';

import './styles.css';

import residencial from '../../assets/residencial.png';
import automotivo from '../../assets/automotivo.png';
import eletronica from '../../assets/eletronica.png';
import jardim from '../../assets/jardim.png';
import mais from '../../assets/mais.png';
import moveis from '../../assets/moveis.png';
import Cabecalho from '../../components/Cabecalho';
import ButtonPesquisa from '../../components/BotaoPesquisa';


const Home = () => {
    return (
        <>
            <Cabecalho />
            <main id="bg">
                 
                <div id="conteudo">
                    <div id="info">
                        <h1 className="titulo">
                            Seu site de pesquisa de profissionais especializados em manutenções diversas
                        </h1>
                        <p className="subtitulo">
                            Aqui você encontrará profissionais capacitados em solucinar os mais diversos problemas.
                        </p>
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
                    <div id="categorias">
                    <p className="pesquisa">Selecione abaixo qual a categoria que gostaria de pesquisar:</p>
                        <ButtonPesquisa 
                            url="/residencial"
                            text="Residencial"
                            classe="buttonCat"
                            img={residencial}
                            alt="Residencial"
                        />

                        <ButtonPesquisa 
                            url="/automotiva"
                            text="Automotiva"
                            classe="buttonCat"
                            img={automotivo}
                            alt="Automotiva"
                        />

                        <ButtonPesquisa 
                            url="/eletronica"
                            text="Elêtronica"
                            classe="buttonCat"
                            img={eletronica}
                            alt="Elêtronica"
                        />

                        <ButtonPesquisa 
                            url="/jardim"
                            text="Jadins"
                            classe="buttonCat"
                            img={jardim}
                            alt="Jardim"
                        />

                        <ButtonPesquisa 
                            url="/moveis"
                            text="Móveis"
                            classe="buttonCat"
                            img={moveis}
                            alt="Móveis"
                        />

                        <ButtonPesquisa 
                            url="/outras"
                            text="Outras categorias"
                            classe="buttonCat"
                            img={mais}
                            alt="Outras categorias"
                        />
                    </div>
                </div> 
            </main>
        </>
    );
}

export default Home;