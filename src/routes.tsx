import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Lista from './pages/Listagem';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Lista} path="/categorias/:prof" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;