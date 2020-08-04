import React from 'react';

import './styles.css';

import eletrica from '../../assets/eletrica.png'
import pintura from '../../assets/pintor.png';
import limpeza from '../../assets/limpeza.png';
import alvenaria from '../../assets/pedreiro.svg';
import hidraulica from '../../assets/encanamento.png';
import mais from '../../assets/outros_residencial.png';
import Cabecalho from '../../components/Cabecalho';
import ButtonPesquisa from '../../components/BotaoPesquisa';


const Residencial = () => {

    return (
        <>
        <Cabecalho />
           
        <div id="subResidencial">
            <h1>Manutenção Residencial</h1>
            
            <p className="subtitulo">Selecione uma subcategoria para vizualizar a lista de profissionais especializados em manutenção residencial</p>
            
            <div className="subBotoes">
                <ButtonPesquisa 
                    url="/residencial/Pintores"
                    text="Pintura"
                    classe="subCategorias"
                    img={pintura}
                    alt="Pintura"
                />

                <ButtonPesquisa 
                    url="/pedreiros"
                    text="Alvenaria"
                    classe="subCategorias"
                    img={alvenaria}
                    alt="Alvenaria"
                />

                <ButtonPesquisa 
                    url="/eletricistas"
                    text="Elétrica"
                    classe="subCategorias"
                    img={eletrica}
                    alt="Elétrica"
                />
            </div>
            <div className="subBotoes">
                <ButtonPesquisa 
                    url="/encanadores"
                    text="Hidráulica"
                    classe="subCategorias"
                    img={hidraulica}
                    alt="Hidráulica"
                />

                <ButtonPesquisa 
                    url="/limpezas"
                    text="Limpeza pesada"
                    classe="subCategorias"
                    img={limpeza}
                    alt="Limpeza pesada"
                />

                <ButtonPesquisa 
                    url="/todos"
                    text="Listar todos"
                    classe="subCategorias"
                    img={mais}
                    alt="Listar todos"
                />
            </div>
        </div>
        </>
    );
}

export default Residencial;