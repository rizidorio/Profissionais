import React from 'react';
import { Link } from 'react-router-dom';

import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import mais from '../../assets/mais_info.png';

import './styles.css';

interface DadosProps {
    nome: string,
    contato: string,
    bairro: string,
    whats: string,
    face: string,
    subcategorias: [string],
}

const Dados: React.FC<DadosProps> = ({nome, contato, bairro, whats, face, subcategorias}) => {
    return (
        <article id="box-dados">
            <section className="dados">
                <p>Nome: <strong>{nome}</strong></p>
                <p>Contato: <strong>{contato}</strong></p>
                <p>Bairro: <strong>{bairro}</strong></p>
                <p>Serviços: <strong>{subcategorias}</strong></p>
            </section>
            <section className="redesSociais">
                <Link to={`/${whats}`}>
                    <img src={whatsapp} alt='Whatsapp' />
                </Link>
                <Link to={`/${face}`}>
                    <img src={facebook} alt='Facebook' />
                </Link>
                <Link to='/detalhes'>
                    <img src={mais} alt='Saiba mais' />
                </Link>
            </section>
        </article>
    );
}

export default Dados;