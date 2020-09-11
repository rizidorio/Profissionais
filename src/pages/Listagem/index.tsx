import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';
import axios from 'axios';

import api from '../../services/api';

import Cabecalho from '../../components/Cabecalho';
import Dados from '../../components/DadosLista';

import './styles.css';

interface Profissional {
    id: number,
    nome: string,
    cpf: string,
    bairro: string,
    cidade: string,
    celular: string,
    whatsapp: string,
    facebook: string,
    subcategorias: [],
}

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

    const [profissionais, setProfissionais] = useState<Profissional[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);

    const [ufs, setUfs] = useState<string[]>([]);
    const [cidades, setCidades] = useState<string[]>([]);

    const [catSelecionada, setCatSelecionada] = useState('0');
    const [nomeCatSelecionada, setNomeCatSelecionada] = useState('Selecione uma categoria para exibir a lista');
    const [subcatSelecionada, setSubcatSelecionada] = useState('0');

    const [UfSelecionada, setUfSelecionada] = useState('0');
    const [CidadeSelecionada, setCidadeSelecionada] = useState('0');

    useEffect(() => {
        let data;

        subcatSelecionada === '0' ? data = api.get(`profissionais?cidade=${CidadeSelecionada}&categoria=${catSelecionada}`) :
                                    data = api.get(`profissionais?cidade=${CidadeSelecionada}&categoria=${catSelecionada}&subcategoria=${subcatSelecionada}`);
            data.then(response => {
                setProfissionais(response.data);
        });
    }, [CidadeSelecionada, catSelecionada, subcatSelecionada]);

    useEffect(() => {
        api.get('categorias').then(response => {
            setCategorias(response.data);
        });
    }, []);

    useEffect(() => {
        if(catSelecionada === '0')
            return;

        api.get(`subcategorias?categoria=${catSelecionada}`).then(response => {
            setSubcategorias(response.data);
        });
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
        event.preventDefault();
        const cat = event.target.value;

        let nomeCat = '';
        switch(Number(cat)){
            case 1: 
                nomeCat = 'Manutenção Residencial';
                break;
            case 2:
                nomeCat = 'Manutenção Automotiva';
                break;
            case 3:
                nomeCat = 'Manutenção Eletrônica';
                break;
            case 4:
                nomeCat = 'Informática';
                break;
            case 5:
                nomeCat = 'Cuidados Pessoais';
                break;
            case 6:
                nomeCat = 'Trasnportes';
                break;
            default:
                nomeCat = 'Selecione uma categoria';
                break;
        }
        setNomeCatSelecionada(nomeCat);
        setCatSelecionada(cat);
    }

    function handleSelectSubcategoria(event: ChangeEvent<HTMLSelectElement>) {
        event.preventDefault();
        const subcat = event.target.value;
        setSubcatSelecionada(subcat);
        console.log(profissionais); 
    }

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        event.preventDefault();
        const uf = event.target.value;
        setUfSelecionada(uf);
        console.log(UfSelecionada);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        event.preventDefault();
        const city = event.target.value;
        setCidadeSelecionada(city);
    }

    return (
        <div id="page-list">
            <div id="page-list-content" className="container">
                <Cabecalho titulo="Lista de Profissionais"/>
                <main>
                    <form className="form-pesquisa">
                        <fieldset>
                            <div className="select-container">
                                <div className="select-local">
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
                                </div>
                                <div className="select-categoria">
                                    <div className="select-block">
                                        <label htmlFor="categorias">Categorias</label>
                                        <select name="categorias" id="categorias" value={catSelecionada} onChange={handleSelectCategoria}>
                                            <option value="0" disabled hidden>Selecione uma Categoria</option>
                                            {categorias.map(categoria => (
                                                <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                                            ))}
                                        </select>
                                    </div>                              
                                    <div className="select-block">
                                        <label htmlFor="subcategorias">Serviços</label>
                                        <select name="subcategorias" id="subcategorias" value={subcatSelecionada} onChange={handleSelectSubcategoria}>
                                            <option value="0">Todos Serviços</option>
                                            {subcategorias.map(subcategoria => (
                                                <option key={subcategoria.id} value={subcategoria.id}>{subcategoria.nome}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>  
                        </fieldset>
                    </form>
                    <hr />
                    {
                        CidadeSelecionada === '0' || catSelecionada === '0' ?
                        <h3>{nomeCatSelecionada}</h3> : 
                        <h3>{nomeCatSelecionada} em {CidadeSelecionada}</h3> 
                    }                       
                    
                    <section className="lista-profissionais">
                        {profissionais.map(profissional => (
                            <Dados
                                key={profissional.id}
                                nome={profissional.nome}
                                bairro={profissional.bairro}
                                celular={profissional.celular}
                                whats={profissional.whatsapp}
                                face={profissional.facebook}
                            />

                        ))}
                        {/* <Dados 
                            nome="Teste"
                            bairro="Centro"
                            contato="(24)99999-9999"
                            whats="24999999999"
                            face="teste"
                            subcategorias = "Pedreiro alvenaria, Pedreiro Acabamento"
                        /> */}
                        
                    </section>
                    {/* <footer>
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
                    </footer> */}
                </main>
            </div>
        </div>
    );
}

export default Lista;
