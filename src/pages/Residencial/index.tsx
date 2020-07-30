import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import eletrica from '../../assets/eletrica.png'
import pintura from '../../assets/pintor.png';
import limpeza from '../../assets/limpeza.png';
import alvenaria from '../../assets/pedreiro.svg';
import hidraulica from '../../assets/encanamento.png';
import mais from '../../assets/outros_residencial.png';
import Cabecalho from '../../components/Cabecalho';

const Residencial = () => {

    return (
        <>
        <Cabecalho />
           
        <div id="subResidencial">
            <h1>Manutenção Residencial</h1>
            <p className="subtitulo">Selecione uma subcategoria para vizualizar a lista de profissionais especializados em manutenção residencial</p>
            
            <div className="subBotoes">
                <Link to="/residencial">
                    <button  className="subCategorias">
                        <img src={pintura} alt='Pintura' />
                        Pintura
                    </button>
                </Link>
            
                <Link to="/automotiva">
                    <button className="subCategorias">
                    <img src={alvenaria} alt='Pintura' />
                        Alvenaria
                    </button>
                </Link>
                <Link to="/eletrônica">
                    <button className="subCategorias">
                    <img src={eletrica} alt='Pintura'/>
                        Elétrica
                    </button>
                </Link>
                </div>
                <div className="subBotoes">
                <Link to="/jardim">
                    <button className="subCategorias">
                    <img src={hidraulica} alt='Pintura' />
                        Hidráulica
                    </button>
                </Link>
                <Link to="/móveis">
                    <button className="subCategorias">
                    <img src={limpeza} alt='Pintura' />
                        Limpeza pesada
                    </button>
                </Link>
                <Link to="/outras categorias">
                    <button className="subCategorias">
                    <img src={mais} alt='Pintura' />
                        Listar todos
                    </button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Residencial;