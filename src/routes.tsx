import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Lista from './pages/Listagem';
import SaberMais from './pages/SaberMais';
import Cadastrar from './pages/Cadastro';
import CadastroRealizado from './pages/CadastroRealizado';
import DadosDetalhes from './pages/Detalhes';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Lista} path="/pesquisa" />
                <Route component={SaberMais} path="/saber-mais" />
                <Route component={Cadastrar} path="/cadastrar" />
                <Route component={CadastroRealizado} path="/cadastroRealizado" />
                <Route component={DadosDetalhes} path="/detalhes/:id" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
