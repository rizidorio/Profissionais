import React from 'react';

import './styles.css';
import Cabecalho from '../../components/Cabecalho';

const Cadastro = () => {
    return(
        <div id="page-cadastro">
            <div id="page-cadastro-content" className="container">
                <Cabecalho titulo="Cadastro" />
            </div>
        </div>
    );
}

export default Cadastro;