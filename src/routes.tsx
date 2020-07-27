import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Pesquisa from './pages/Pesquisa';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route children={<Pesquisa />} path="/:categoria" />
        </BrowserRouter>
    );
};

export default Routes;