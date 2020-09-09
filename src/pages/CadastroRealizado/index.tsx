import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo_profissionais.png';
import fundo from '../../assets/undraw_confirmation_2uy0.svg'

import './styles.css'


const CadastroRealizado = () => {
    return(
        <div id="page-cadastro-realizado">
            <div id="page-cadastro-realizado-content" className="container">
                <header className="logo-container">
                    <Link to='/'>
                        <img src={logo} alt="Logotipo" />
                    </Link>
                </header>
                <main>
                    <h1>Parabéns!!!</h1>
                    <h3>Seu cadastro foi realizado com sucesso!</h3>
                    <div className="back-image">
                        <img src={fundo} alt="Back" />
                    </div>
                    <Link to='/'>Ir para página inicial</Link>
                </main>
            </div>
        </div>
    );
}

export default CadastroRealizado;
