import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';

import Cabecalho from '../../components/Cabecalho';

import './styles.css';
import Dados from '../../components/DadosLista';

type props = {prof: string};

const Lista = ({match}: RouteComponentProps<props>) => {

    return (
        <>
            <Cabecalho titulo={`${match.params.prof} Residenciais em Volta Redonda`}/>
            <main id="pagLista">
                <div id="conteudo">
                    <div className="profissionais">
                        <Dados 
                            nome="Pintor Teste"
                            contato="(24) 99999-9999"
                            bairro="Bairro"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </div>

                    <div className="profissionais">
                        <Dados 
                            nome="Pintor Teste"
                            contato="(24) 99999-9999"
                            bairro="Bairro"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </div>

                    <div className="profissionais">
                        <Dados 
                            nome="Pintor Teste"
                            contato="(24) 99999-9999"
                            bairro="Bairro"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </div>

                    <div className="profissionais">
                        <Dados 
                            nome="Pintor Teste"
                            contato="(24) 99999-9999"
                            bairro="Bairro"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </div>

                    <div className="profissionais">
                        <Dados 
                            nome="Pintor Teste"
                            contato="(24) 99999-9999"
                            bairro="Bairro"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </div>

                    <div className="profissionais">
                        <Dados 
                            nome="Pintor Teste"
                            contato="(24) 99999-9999"
                            bairro="Bairro"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </div>

                    <div className="profissionais">
                        <Dados 
                            nome="Pintor Teste"
                            contato="(24) 99999-9999"
                            bairro="Bairro"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </div>

                    <div className="profissionais">
                        <Dados 
                            nome="Pintor Teste"
                            contato="(24) 99999-9999"
                            bairro="Bairro"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </div>

                </div>

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
        </>
    );
}

export default Lista;