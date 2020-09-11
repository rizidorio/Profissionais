import React, { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';

import Cabecalho from '../../components/Cabecalho';
import Campo from '../../components/CampoTexto';
import api from '../../services/api';

import './styles.css';

interface Categoria {
    id: number;
    nome: string;
}

interface Subcategoria {
    id: number;
    nome: string;
}

const Cadastro = () => {
    const history = useHistory();

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);

    const [catSelecionada, setCatSelecionada] = useState('0');
    const [subcatsSelecionada, setSubcatsSelecionada] = useState<number[]>([]);

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        cep: '',
        bairro: '',
        cidade: '',
        uf: '',
        celular: '',
        whatsapp: '',
        email: '',
        facebook: '',
    });

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

    function handleCheckedSubcategoria(id: number) {
        const selecionados = subcatsSelecionada.findIndex(sub => sub === id);

        if(selecionados >= 0) {
            const filtrado = subcatsSelecionada.filter(sub => sub !== id);

            setSubcatsSelecionada(filtrado);
        } else {
            setSubcatsSelecionada([...subcatsSelecionada, id]);
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;

        setFormData({...formData, [name]: value});
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { nome, cpf, cep, bairro, cidade, uf, celular, whatsapp, email, facebook } = formData;

        const categoria = catSelecionada;
        const subcategorias = subcatsSelecionada;

        const data = {
            nome: nome,
            cpf: cpf,
            cep: cep, 
            bairro: bairro, 
            cidade: cidade, 
            uf: uf.toUpperCase(), 
            celular: celular, 
            whatsapp: whatsapp, 
            email: email.toLowerCase(), 
            facebook: facebook,
            categoria: categoria,
            subcategorias: subcategorias.join(',')
        }

        await api.post('profissionais', data).then((res) => {
            history.push('/cadastroRealizado');
        }).catch((err) => {
            console.log('Erro: ', err);
        });
    }
    return (
        <div id="page-cadastro">
            <div id="page-cadastro-content" className="container">
                <Cabecalho titulo="Cadastro" />
                <main>
                    <form className="form-cadastro" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Seus dados pessoais</legend>
                            <Campo 
                            id="nome"
                            name="nome"
                            label="Nome completo"
                            placeholder="Nome completo"
                            type="text"
                            minLength={3}
                            onChange={handleInputChange}
                        />
                        <div className="input-mask">
                            <InputMask 
                                mask="999.999.999-99"
                                maskChar=" "
                                placeholder="CPF"
                                id="cpf"
                                name="cpf"
                                onChange={handleInputChange}
                            />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        </fieldset>

                       <fieldset>
                           <legend>Seu endereço</legend>
                           <div className="input-mask">
                                <InputMask 
                                    mask="99.999-999"
                                    maskChar=" "
                                    placeholder="CEP"
                                    id="cep"
                                    name="cep"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="cep">CEP</label>
                            </div>
                            <Campo 
                                id="bairro"
                                name="bairro"
                                label="Bairro"
                                placeholder="Bairro"
                                type="text"
                                onChange={handleInputChange}
                            />
                            <Campo 
                                id="cidade"
                                name="cidade"
                                label="Cidade"
                                placeholder="Cidade"
                                type="text"
                                onChange={handleInputChange}
                            />
                            <Campo 
                                id="uf"
                                name="uf"
                                label="UF"
                                placeholder="UF"
                                type="text"
                                maxLength={2}                            
                                onChange={handleInputChange}
                            />
                       </fieldset>

                        <fieldset>
                            <legend>Seus contatos</legend>
                            <div className="input-mask">
                                <InputMask 
                                    mask="(99)99999-9999"
                                    maskChar=" "
                                    placeholder="Celular"
                                    id="celular"
                                    name="celular"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="celular">Celular</label>
                            </div>
                            <div className="input-mask">
                                <InputMask 
                                    mask="99999999999"
                                    maskChar=" "
                                    placeholder="Whatsapp"
                                    id="whatsapp"
                                    name="whatsapp"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="whatsapp">Whatsapp</label>
                            </div>
                            
                            <Campo 
                                id="email"
                                name="email"
                                label="E-mail"
                                placeholder="E-mail"
                                type="email"
                                onChange={handleInputChange}
                            />
                            <Campo 
                                id="facebook"
                                name="facebook"
                                label="Facebook"
                                placeholder="Facebook"
                                type="text"
                                onChange={handleInputChange}
                            />
                        </fieldset>

                        <fieldset>
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
                                    {catSelecionada === '0' ? 
                                        <h4>Selecione uma categoria para exibir os serviços</h4> : 
                                        <h4>Serviços realizados</h4>
                                    } 
                                        
                                        <div className="check-subcategorias">
                                            {subcategorias.map(subcategoria => (
                                                    <label key={subcategoria.id}>
                                                        <input type="checkbox" key={subcategoria.id} value={subcategoria.id} onClick={() => handleCheckedSubcategoria(subcategoria.id)} />
                                                        {subcategoria.nome}    
                                                    </label>
                                                ))}
                                        </div>                           
                                </div>
                        </fieldset>
                        {/* {
                            !formData.nome && !formData.cpf && !formData.cep && !formData.bairro
                            && !formData.cidade && !formData.uf && !formData.celular && !formData.whatsapp
                            && !formData.email && catSelecionada === '0' && subcatsSelecionada ? <p>vazio</p> : <p>cheio</p>
                        } */}
                        <button type="submit">Salvar</button> 
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Cadastro;
