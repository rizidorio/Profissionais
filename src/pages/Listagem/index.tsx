import React from 'react';
import { RouteComponentProps} from 'react-router-dom';

import { FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';

import Cabecalho from '../../components/Cabecalho';

import './styles.css';

type props = {prof: string};

const Lista = ({match}: RouteComponentProps<props>) => {

    return (
        <>
            <Cabecalho />
            <main id="pagLista">
                <h1>{match.params.prof} Residenciais em <a href="">Volta Redonda</a></h1>
                <div id="conteudo">
                    <div className="profissionais">

                    </div>

                    <div className="profissionais">

                    </div>

                    <div className="profissionais">

                    </div>

                    <div className="profissionais">

                    </div>

                    <div className="profissionais">

                    </div>

                    <div className="profissionais">

                    </div>

                    <div className="profissionais">

                    </div>

                    <div className="profissionais">

                    </div>
                </div>
                <footer>
                    <a href="" className="esquerda">
                        <span >
                            <FiChevronsLeft />
                        </span>
                        Página anterior
                    </a>
                    <p>1 de 60</p>
                    <a href="" className="direita">
                        Próxima página
                        <span>
                            <FiChevronsRight />
                        </span>   
                    </a>
                </footer>
            </main>
        </>
    );
}

export default Lista;