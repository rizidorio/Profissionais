import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import api from '../../services/api';

import Cabecalho from '../../components/Cabecalho';

import './styles.css';

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
                <Cabecalho titulo={`Detalhes sobre ${profissional.nome}`}/>
                <main>
                    <article>
                        <p>Nome: <strong>{profissional.nome}</strong></p>
                        <p>Bairro: <strong>{profissional.bairro}</strong></p>
                        <p>Cidade: <strong>{profissional.cidade}</strong></p>
                        <p>Celuar: <strong>{profissional.celular}</strong></p>
                        <p>Whatsapp:  
                            <a href={`https://api.whatsapp.com/send?phone=55${profissional.whatsapp}&text=Encontrei%20seu%20contato%20no%20site%20@Profissionais`} target="_blank" > 
                                <strong> {profissional.whatsapp}</strong>
                            </a>
                        </p>
                        <p>Facebook: <Link to=""><strong>{profissional.facebook}</strong></Link></p>
                        <p>Categoria: <strong>{categoriaProfissional.nome}</strong></p>
                        <p>Serviços: <strong>{servicoProfissional.map(servico => servico.nome).join(' - ')}</strong></p>
                    </article>
                </main>
            </div>
        </div>
    );
}   
export default withRouter(DadosDetalhes);