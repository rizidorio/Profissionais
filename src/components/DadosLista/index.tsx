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
}

const Dados: React.FC<DadosProps> = ({nome, contato, bairro, whats, face}) => {
    return (
        <>
            <div className="dados">
                <p>Nome: {nome}</p>
                <p>Contato:{contato}</p>
                <p>Bairro: {bairro}</p>
            </div>
            <div className="redesSociais">
                <Link to={`/${whats}`}>
                    <img src={whatsapp} alt='Whatsapp' />
                </Link>
                <Link to={`/${face}`}>
                    <img src={facebook} alt='Facebook' />
                </Link>
                <Link to='/detalhes'>
                    <img src={mais} alt='Saiba mais' />
                </Link>
            </div>
        </>
    );
}

export default Dados;