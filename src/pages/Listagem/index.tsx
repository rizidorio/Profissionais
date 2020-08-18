import React, { useState, useEffect, ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';
import axios from 'axios';

import Cabecalho from '../../components/Cabecalho';
import Dados from '../../components/DadosLista';
import Select from '../../components/Select';

import './styles.css';

interface IBGEUFResponse {
    sigla: string;
    nome: string;
}

interface IBGECidadeResponse {
    nome: string;
}

const Lista = () => {

    const [ufs, setUfs] = useState<string[]>([]);
    const [cidades, setCidades] = useState<string[]>([]);

    const [UfSelecionada, setUfSelecionada] = useState('0');
    const [CidadeSelecionada, setCidadeSelecionada] = useState('0');

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInicial = response.data.map(uf => uf.sigla);
            const nomesUfs = response.data.map(uf => uf.nome);

            setUfs(nomesUfs.sort());
        });
    }, []);

    useEffect(() => {
        if(UfSelecionada === '0') {
            return;
        }

        axios.get<IBGECidadeResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UfSelecionada}/municipios`).then(response => {
            const NomesCidades = response.data.map(cidade => cidade.nome);

            setCidades(NomesCidades);
        });

    }, [UfSelecionada]);

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        setUfSelecionada(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setCidadeSelecionada(city);
    }

    return (
        <div id="page-list">
            <div id="page-list-content" className="container">
                <Cabecalho titulo="Pesquisa de profissionais em Volta Redonda"/>
                <main>
                    <form className="form-pesquisa">
                        <fieldset>
                            <legend>Campos pesquisa</legend>
                            <div className="select-block">
                                <label htmlFor="uf">Estado</label>
                                <select name="uf" id="uf" value={UfSelecionada} onChange={handleSelectUf}>
                                    <option value="0" disabled hidden>Selecione um Estado</option>
                                    {ufs.map(uf => (
                                        <option key={uf} value={uf}>{uf}</option>
                                    ))}
                                </select>
                            </div>
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