import React from 'react';
import Cabecalho from '../../components/Cabecalho';
import Campo from '../../components/CampoTexto';
import './styles.css';


const Cadastro = () => {
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
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Cadastro;