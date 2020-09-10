import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo_profissionais.png';
import fundo from '../../assets/undraw_confirmation_2uy0.svg'

import './styles.css'


const CadastroRealizado = () => {
    return(
        <main id="page-cadastro-realizado">
            <div id="page-cadastro-realizado-content" className="container">
                <section className="logo-container">
                    <img src={logo} alt="Logotipo" />
                    <Link to='/' >Ir para página inicial</Link> 
                </section>
                <section className="content-info">
                        <h1>Seja bem-vindo!!!</h1>
                        <h4>Seu cadastro foi realizado com sucesso!</h4>
                </section>
                <section className="back-image">
                        <img src={fundo} alt="Back" />
                </section>
            </div>
        </main>
    );
}

export default CadastroRealizado;
