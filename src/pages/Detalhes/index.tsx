import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Cabecalho from '../../components/Cabecalho';

type DadosDetalhesParams = {
    id: string
}

type DadosDetalhesProps = RouteComponentProps<DadosDetalhesParams>;

const DadosDetalhes: React.FC<DadosDetalhesProps> = ({ match }) => {
    return (
        <div id="page-detalhes">
            <div id="page-detalhes-content" className="content">
                <Cabecalho titulo="Nome Profissional"/>
            </div>
        </div>
    );
}   
export default withRouter(DadosDetalhes);