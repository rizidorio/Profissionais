import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Residencial from './pages/Residencial'
import Lista from './pages/Listagem';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Residencial} path="/residencial" />
                <Route component={Lista} path="/lista" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;