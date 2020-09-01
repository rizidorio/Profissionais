import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';
import axios from 'axios';

import api from '../../services/api';

import Cabecalho from '../../components/Cabecalho';
import Dados from '../../components/DadosLista';
import Select from '../../components/Select';

import './styles.css';

interface Categoria {
    id: number;
    nome: string;
}

interface Subcategoria {
    id: number;
    nome: string;
}

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECidadeResponse {
    nome: string;
}

const Lista = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);

    const [ufs, setUfs] = useState<string[]>([]);
    const [cidades, setCidades] = useState<string[]>([]);

    const [catSelecionada, setCatSelecionada] = useState('0');
    const [subcatSelecionada, setSubcatSelecionada] = useState('0');

    const [UfSelecionada, setUfSelecionada] = useState('0');
    const [CidadeSelecionada, setCidadeSelecionada] = useState('0');

    useEffect(() => {
        api.get('categorias').then(response => {
            setCategorias(response.data);
        })
    }, []);

    useEffect(() => {
        if(catSelecionada === '0')
            return;

        axios.get(`subcategorias/${catSelecionada}`).then(response => {
            setSubcategorias(response.data);
        })
    }, [catSelecionada]);

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const siglasUfs = response.data.map(uf => uf.sigla);

            setUfs(siglasUfs.sort());
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

    function handleSelectCategoria(event: ChangeEvent<HTMLSelectElement>) {
        const cat = event.target.value;
        setCatSelecionada(cat);
    }

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
                <Cabecalho titulo="Listagem de Profissionais"/>
                <main>
                    <form className="form-pesquisa">
                        <fieldset>
                            <legend>Filtros</legend>
                            <div className="select-container">
                                <div className="select-block">
                                    <label htmlFor="uf">Estado</label>
                                    <select name="uf" id="uf" value={UfSelecionada} onChange={handleSelectUf}>
                                        <option value="0" hidden>Selecione um Estado</option>
                                        {ufs.map(uf => (
                                            <option key={uf} value={uf}>{uf}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="select-block">
                                    <label htmlFor="cidades">Cidade</label>
                                    <select name="cidades" id="cidades" value={CidadeSelecionada} onChange={handleSelectCity}>
                                        <option value="0" disabled hidden>Selecione uma Cidade</option>
                                        {cidades.map(cidade => (
                                            <option key={cidade} value={cidade}>{cidade}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="select-block">
                                    <label htmlFor="categorias">Categorias</label>
                                    <select name="categorias" id="categorias" value={catSelecionada} onChange={handleSelectCategoria}>
                                        <option value="0" hidden>Selecione uma Categoria</option>
                                        {categorias.map(categoria => (
                                            <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="select-block">
                                    <label htmlFor="subcategorias">Subcategorias</label>
                                    <select name="subcategorias" id="subcategorias" value={catSelecionada} onChange={handleSelectCategoria}>
                                        <option value="0" hidden>Selecione uma Subcategoria</option>
                                        {subcategorias.map(subcategoria => (
                                            <option key={subcategoria.id} value={subcategoria.id}>{subcategoria.nome}</option>
                                        ))}
                                    </select>
                                </div>
                            
                                {/* <Select 
                                    name="categoria"
                                    label="Categoria"
                                    text="Selecione uma"
                                    options={[
                                        {value: '1', label: 'Manutenção'},
                                        {value: '2', label: 'Cuidados Pessoais'},
                                        {value: '3', label: 'Transporte'},
                                        {value: '4', label: 'Ensino'},
                                    ]}
                                /> 
                                <Select 
                                    name="subcategoria"
                                    label="Subcategoria"
                                    text="Selecione uma"
                                    options={[
                                        {value: '1', label: 'Residencial'},
                                        {value: '2', label: 'Automotiva'},
                                        {value: '3', label: 'Movéis'},
                                        {value: '4', label: 'Eletrônica'},
                                    ]}
                                /> */}
                                </div>  
                        </fieldset>
                    </form>
                    <hr />
                    <h3>Manutenção Residencial em Volta Redonda</h3>
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
                        <Link to="/pagina" className="esquerda" aria-disabled>
                            <span>
                                <FiChevronsLeft />
                            </span>
                            Página anterior
                        </Link>
                        <p>1 de 60</p>
                        <Link to="/pagina" className="direita">
                            Próxima página
                            <span>
                                <FiChevronsRight />
                            </span>   
                        </Link>
                    </footer>
                </main>
            </div>
        </div>
    );
}

export default Lista;