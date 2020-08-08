import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';

import Cabecalho from '../../components/Cabecalho';

import './styles.css';
import Dados from '../../components/DadosLista';

type props = {prof: string};

const Lista = ({match}: RouteComponentProps<props>) => {

    return (
        <div id="page-list">
            <div id="page-list-content" className="container">
                <Cabecalho titulo="Manutenção Residencial em Volta Redonda"/>
                <main>
                    
                    <footer>
                        <a href="/pagina" className="esquerda">
                            <span >
                                <FiChevronsLeft />
                            </span>
                            Página anterior
                        </a>
                        <p>1 de 60</p>
                        <a href="/pagina" className="direita">
                            Próxima página
                            <span>
                                <FiChevronsRight />
                            </span>   
                        </a>
                    </footer>
                </main>
            </div>
        </div>
    );
}

export default Lista;