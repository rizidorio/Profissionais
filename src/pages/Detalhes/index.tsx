import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import api from '../../services/api';

import Cabecalho from '../../components/Cabecalho';

type DadosDetalhesParams = {
    id: string,
}

interface Profissional {
    id: number
    nome: string,
    cpf: string,
    cep: string,
    bairro: string,
    cidade: string,
    celular: string,
    whatsapp: string,
    facebook: string,
}

interface CategoriaProfissional {
    id: number,
    nome: string
}

interface ServicoProfissional {
    id: number,
    nome: string
}

type DadosDetalhesProps = RouteComponentProps<DadosDetalhesParams>;

const DadosDetalhes: React.FC<DadosDetalhesProps> = ({ match }) => {

    const [profissional, setProfissional] = useState<Profissional>({} as Profissional);
    const [categoriaProfissional, setCategoriaProfissional] = useState<CategoriaProfissional>({} as CategoriaProfissional);
    const [servicoProfissional, setServicoProfissional] = useState<ServicoProfissional[]>([]);

    useEffect(() => {
        api.get(`profissionais/${match.params.id}`).then(response => {
            console.log(response.data)
            setProfissional(response.data.serializedProfissional);
            setCategoriaProfissional(response.data.categoria);
            setServicoProfissional(response.data.subcategorias);
        });
    },[]);

    return (
        <div id="page-detalhes">
            <div id="page-detalhes-content" className="content">
                <Cabecalho titulo={profissional.nome}/>
                
                <div>
                    <h2>{categoriaProfissional.nome}</h2>
                    <h2>{servicoProfissional.map(servico => servico.nome).join(', ')}</h2>
                </div>
            </div>
        </div>
    );
}   
export default withRouter(DadosDetalhes);