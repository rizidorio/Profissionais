import React, { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import Cabecalho from '../../components/Cabecalho';
import Campo from '../../components/CampoTexto';

import './styles.css';
import api from '../../services/api';

interface Categoria {
    id: number;
    nome: string;
}

interface Subcategoria {
    id: number;
    nome: string;
}


const Cadastro = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);

    const [catSelecionada, setCatSelecionada] = useState('0');
    const [subcatsSelecionada, setSubcatsSelecionada] = useState([]);

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

    function handleSelectCategoria(event: ChangeEvent<HTMLSelectElement>) {
        event.preventDefault();
        const cat = event.target.value;
        setCatSelecionada(cat);
    }

    // function handleCheckedSubcategoria(event: ChangeEvent<HTMLInputElement>) {
    //     event.preventDefault();
    //     const subcat = event.target.value;
    //     setSubcatsSelecionada(subcat);    
    // }

    // async function handleSubmit(event: FormEvent) {
    //     event.preventDefault();

    // }
    return(
        <div id="page-cadastro">
            <div id="page-cadastro-content" className="container">
                <Cabecalho titulo="Cadastro" />
                <main>
                    <form className="form-cadastro">
                        <fieldset>
                            <legend>Seus dados pessoais</legend>
                            <Campo 
                            id="nome"
                            name="nome"
                            label="Nome completo"
                            placeholder="Nome completo"
                            type="text"
                        />
                        <Campo 
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            placeholder="CPF"
                            type="text"
                        />
                        </fieldset>
                       <fieldset>
                           <legend>Seu endereço</legend>
                           <Campo 
                            id="cep"
                            name="cep"
                            label="CEP"
                            placeholder="CEP"
                            type="text"
                        />
                        <Campo 
                            id="bairro"
                            name="bairro"
                            label="Bairro"
                            placeholder="Bairro"
                            type="text"
                        />
                        <Campo 
                            id="cidade"
                            name="cidade"
                            label="Cidade"
                            placeholder="Cidade"
                            type="text"
                        />
                        <Campo 
                            id="uf"
                            name="uf"
                            label="UF"
                            placeholder="UF"
                            type="text"
                        />
                       </fieldset>
                        <fieldset>
                            <legend>Seus contatos</legend>
                            <Campo 
                            id="celular"
                            name="celular"
                            label="Celular"
                            placeholder="Celular"
                            type="text"
                        />
                        <Campo 
                            id="whatsapp"
                            name="whatsapp"
                            label="Whatsapp"
                            placeholder="Whatsapp"
                            type="text"
                        />
                        <Campo 
                            id="email"
                            name="email"
                            label="E-mail"
                            placeholder="E-mail"
                            type="email"
                        />
                        <Campo 
                            id="facebook"
                            name="facebook"
                            label="Facebook"
                            placeholder="Facebook"
                            type="email"
                        />
                        </fieldset>
                        <fieldset>
                            <legend>Seus serviços</legend>
                            <div className="select-categoria">
                                    <div className="select-block">
                                        <label htmlFor="categorias"></label>
                                        <select name="categorias" id="categorias" value={catSelecionada} onChange={handleSelectCategoria}>
                                            <option value="0" disabled hidden>Selecione uma Categoria</option>
                                            {categorias.map(categoria => (
                                                <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                                            ))}
                                        </select>
                                    </div>  
                                    <div>
                                        <h5>Serviços realizados</h5>
                                        {subcategorias.map(subcategoria => (
                                                <label>
                                                    <input type="checkbox" key={subcategoria.id} value={subcategoria.id} />
                                                    {subcategoria.nome}    
                                                </label>
                                            ))}
                                    </div>                            
                                    {/* <div className="select-block">
                                        <label htmlFor="subcategorias"></label>
                                        <select name="subcategorias" id="subcategorias" value={subcatSelecionada} onChange={handleSelectSubcategoria}>
                                            <option value="0">Selecione os Serviços</option>
                                            {subcategorias.map(subcategoria => (
                                                <option key={subcategoria.id} value={subcategoria.id}>{subcategoria.nome}</option>
                                            ))}
                                        </select>
                                    </div> */}
                                </div>
                        </fieldset>
                        <button type="submit">Salvar</button>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Cadastro;