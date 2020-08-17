import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';

import Cabecalho from '../../components/Cabecalho';

import './styles.css';
import Dados from '../../components/DadosLista';
import CampoTexto from '../../components/CampoTexto';

type props = {prof: string};

const Lista = ({match}: RouteComponentProps<props>) => {

    return (
        <div id="page-list">
            <div id="page-list-content" className="container">
                <Cabecalho titulo="Pesquisa de profissionais em Volta Redonda"/>
                <main>
                    <form className="form-pesquisa">
                        <fieldset>
                            <legend>Filtros pesquisa</legend>
                            <CampoTexto 
                                type="text"
                                id="estado"
                                placeholder=" "
                                label="Estado"
                                name="estado"   
                            />

                            <CampoTexto 
                                type="text"
                                id="cidade"
                                placeholder=" "
                                label="Cidade"
                                name="cidade"   
                            />

                            <CampoTexto 
                                type="text"
                                id="categoria"
                                placeholder=" "
                                label="Categoria"
                                name="categoria"   
                            />

                            <CampoTexto 
                                type="text"
                                id="subcategoria"
                                placeholder=" "
                                label="Subcategoria"
                                name="subcategoria"   
                            />                           
                        </fieldset>
                    </form>
                    <hr />
                    <section className="lista-profissionais">
                        <Dados 
                            nome="Pintor Teste" 
                            bairro="Centro" 
                            contato="(24)99999-9999"
                            whats="+5524999999999"
                            face="teste"
                        />
                        <Dados 
                            nome="Pintor Teste" 
                            bairro="Centro" 
                            contato="(24)99999-9999"
                            whats="+5524999999999"
                            face="teste"
                        />

                        <Dados 
                            nome="Pintor Teste" 
                            bairro="Centro" 
                            contato="(24)99999-9999"
                            whats="+5524999999999"
                            face="teste"
                        />

                        <Dados 
                            nome="Pintor Teste" 
                            bairro="Centro" 
                            contato="(24)99999-9999"
                            whats="+5524999999999"
                            face="teste"
                        />

                        <Dados 
                            nome="Pintor Teste" 
                            bairro="Centro" 
                            contato="(24)99999-9999"
                            whats="+5524999999999"
                            face="teste"
                        />

                        <Dados 
                            nome="Pintor Teste" 
                            bairro="Centro" 
                            contato="(24)99999-9999"
                            whats="+5524999999999"
                            face="teste"
                        />
                          <Dados 
                            nome="Pintor Teste" 
                            bairro="Centro" 
                            contato="(24)99999-9999"
                            whats="+5524999999999"
                            face="teste"
                        />
                          <Dados 
                            nome="Pintor Teste" 
                            bairro="Centro" 
                            contato="(24)99999-9999"
                            whats="+5524999999999"
                            face="teste"
                        />
                    </section>
                    <footer>
                        <a href="/pagina" className="esquerda">
                            <span>
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