import React from 'react';
import { Link } from 'react-router-dom';

import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import mais from '../../assets/mais_info.png';

import './styles.css';

interface DadosProps {
    nome: string,
    celular: string,
    bairro: string,
    whats: string,
    face: string,
}

const Dados: React.FC<DadosProps> = ({nome, celular, bairro, whats, face}) => {
    return (
        <article id="box-dados">
            <section className="dados">
                <p>Nome: <strong>{nome}</strong></p>
                <p>Contato: <strong>{celular}</strong></p>
                <p>Bairro: <strong>{bairro}</strong></p>
            </section>
            <section className="redesSociais">
                <a href={`https://wa.me/${whats}`} target="_blank">
                    <img src={whatsapp} alt='Whatsapp' />
                </a>
                <a href={`https://facebook.com/${face}`} target="_blank">
                    <img src={facebook} alt='Facebook' />
                </a>
                <Link to='/detalhes'>
                    <img src={mais} alt='Saiba mais' />
                </Link>
            </section>
        </article>
    );
}

export default Dados;