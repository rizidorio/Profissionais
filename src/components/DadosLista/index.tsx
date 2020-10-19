import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import mais from '../../assets/mais_info.png';

import api from '../../services/api';

import './styles.css';


interface DadosProps {
    id: number,
    nome: string,
    celular: string,
    bairro: string,
    whats: string,
    face: string,
}

interface Servicos {
    id: number,
    nome: string
}

const Dados: React.FC<DadosProps> = ({id, nome, celular, bairro, whats, face}) => {

    const [servicos, setServicos] = useState<Servicos[]>([]);

    useEffect(() => {
        if(id === 0)
            return;
        api.get(`profissionais/${id}`).then(response => {
            setServicos(response.data.subcategorias);
        }); 
    });

    return (
        <article id="box-dados">
            <section className="dados">
                <p>Nome: <strong>{nome}</strong></p>
                <p>Contato: <strong>{celular}</strong></p>
                <p>Bairro: <strong>{bairro}</strong></p>     
                <p>Serviços: 
                    <strong> {servicos.map(
                        servico => servico.nome).join(' - ')}
                    </strong>
                </p>             
            </section>
            <section className="redesSociais">
                <a href={`https://wa.me/${whats}`} target="_blank">
                    <img src={whatsapp} alt='Whatsapp' />
                </a>
                <a href={`https://facebook.com/${face}`} target="_blank">
                    <img src={facebook} alt='Facebook' />
                </a>
                <Link to={`/detalhes/${id.toString()}`}>
                    <img src={mais} alt='Saiba mais' />
                </Link>
            </section>
        </article>
    );
}

export default Dados;