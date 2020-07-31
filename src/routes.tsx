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
                <Route component={Residencial} path="/residencial" exact />
                <Route component={Lista} path="/residencial/:prof" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;